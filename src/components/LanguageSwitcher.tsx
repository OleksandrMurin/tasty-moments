'use client'

import {useLocale} from "next-intl";
import {useRouter} from "next/navigation";
import {ChangeEvent, FC, useTransition} from "react";


export const LanguageSwitcher : FC = () => {
  const [isPending, startTransition] = useTransition();
  const localActive = useLocale();
  const router = useRouter();
  const onSelectChange =(e:ChangeEvent<HTMLSelectElement>) =>{
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`)
    // startTransition(() => {
    // })
  }
  return (
    <div>
      <label className="border-2 rounded text-black">
        <p className="sr-only">Change language</p>
        <select defaultValue={localActive} onChange={onSelectChange} disabled={isPending}>
          <option value="en" className="black">English</option>
          <option value="uk">Українська</option>
        </select>
      </label>
    </div>
  );
};