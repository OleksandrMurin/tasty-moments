import duration from 'dayjs/plugin/duration' // ES 2015
import relativeTime from 'dayjs/plugin/relativeTime'
import en from 'dayjs/locale/en'
import uk from 'dayjs/locale/uk'
import dayjs from "dayjs";
import { getLocale } from 'next-intl/server';

dayjs.extend(duration);
dayjs.extend(relativeTime);
export const getDayjsLocale = async () =>{
    const locale = await getLocale();
    switch(locale) {
        case "en": return en;
        case "uk": return uk;
    }
}