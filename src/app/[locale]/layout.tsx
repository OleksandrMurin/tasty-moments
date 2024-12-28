import Footer from "@/components/layout/Footer";
import { Lato } from "next/font/google";
import { FC, ReactNode } from "react";
import Header from "../../components/layout/Header";
import "./globals.css";

import { mulish } from "@/fonts/MulishFont";
import classNames from "classnames";
import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/uk";
import duration from "dayjs/plugin/duration"; // ES 2015
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// TODO: convert to metadata with locale (getMetadata, next-intl)
export const metadata = {
  title: "Tasty moments",
  description: "Generated by create next app",
};

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
  const { locale } = await params;
  let mainFont = lato;
  if (locale == "en") {
    mainFont = lato;
  }
  if (locale == "uk") mainFont = mulish;
  return (
    <html lang={locale} className="">
      <body
        className={classNames(
          "relative overflow-hidden h-screen flex flex-col",
          mainFont.className
        )}
      >
        <div className="overflow-y-scroll overflow-x-hidden">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />

          <div id="modal-portal"></div>
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
