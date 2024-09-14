'use client'

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";


const LanguageSwitcher = () => {
  const [isPanding, startTranslition] = useTransition();
  const localActive = useLocale();
  const router = useRouter();
  const onSelectChange =(e:ChangeEvent<HTMLSelectElement>) =>{
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`)
    // startTranslition(() => {
    // })
  }
  return (
    <div>
      <label className="border-2 rounded text-black">
        <p className="sr-only">Change language</p>
        <select defaultValue={localActive} onChange={onSelectChange} disabled={isPanding}>
          <option value="en" className="black">English</option>
          <option value="uk">Українська</option>
        </select>
      </label>
    </div>
  );
};

export default LanguageSwitcher