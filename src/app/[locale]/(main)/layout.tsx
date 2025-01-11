import Footer from "@/components/layout/Footer";
import { FC } from "react";

import "../globals.css";

import Header from "@/components/layout/Header";
import "dayjs/locale/en";
import "dayjs/locale/uk";
import { RootLayoutProps } from "../layout";

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
  return [
    <Header />,
    <main className="flex-grow">{children}</main>,
    <Footer />,
  ];
};
export default RootLayout;
