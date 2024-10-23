import { usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

type useQueryParam<T> = (
    name: string,
    defaultValue: T,
    acceptableValues?: T[] 
  ) => [T, Dispatch<SetStateAction<T>>];
  
 export const useQueryParam = <T extends string | number>(name: string, defaultValue: T, acceptableValues?: T[]) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initValue = useMemo(() => {
  const init = searchParams.get(name);
    if( typeof defaultValue === 'string'){
      return init ? init as T : defaultValue;
    }
    if ( typeof defaultValue === 'number') {
      return init ? +init as T : defaultValue;
    }
    
    
    return defaultValue
  }, [])
  
  const [option, setOption] = useState<T>(initValue);
  useEffect(() => {
    const current = new URLSearchParams(searchParams);

    if (!option) {
      current.delete(name);
    }
    else if (current.has(name) || option !== defaultValue) {
      if (acceptableValues && !acceptableValues.includes(option)) {
        setOption(defaultValue);
      }
      else {
        current.set(name, option.toString());
      }
    }

    else {
      return;
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.replace(`${pathname}${query}`, { scroll: false });


  }, [option, router, pathname, searchParams]);
  return [option, setOption] as const;
}
