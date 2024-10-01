import { Lato } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import "../../i18n/i18n";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import duration from "dayjs/plugin/duration"; // ES 2015
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en";
import "dayjs/locale/uk";
import dayjs from "dayjs";

dayjs.extend(duration);
dayjs.extend(relativeTime);

interface RootLayoutProps {
  children: ReactNode;
}

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={lato.className}>
        <NextIntlClientProvider messages={messages}>
          <Header></Header>
          <div>{children}</div>
          <Footer></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
