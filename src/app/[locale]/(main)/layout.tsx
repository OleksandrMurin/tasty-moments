import Footer from "@/components/layout/Footer";
import { FC, ReactNode } from "react";

import Header from "@/components/layout/Header";

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = async ({ children }) => {
  return [
    <Header />,
    <main className="flex-grow">{children}</main>,
    <Footer />,
  ];
};
export default MainLayout;
