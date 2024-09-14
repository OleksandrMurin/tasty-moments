// import {notFound} from 'next/navigation';
// import {getRequestConfig} from 'next-intl/server';

// export const locales = ['en', 'uk'];
// export type Locale = typeof locales[number];

// type RequestConfig = (params: { locale: Locale }) => Promise<{ messages: any }>;

// const requestConfig: RequestConfig = async ({locale}) => {
//     if (!locales.includes(locale)) notFound();

//     const messages = (await import(`@/locales/${locale}.json`)).default;

//     return {messages};
// };

// export default getRequestConfig(requestConfig);