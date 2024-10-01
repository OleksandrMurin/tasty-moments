import {FC, ReactNode} from "react";

const RootLayout: FC<Readonly<{ children: ReactNode }>> = ({children}) => children;

export default RootLayout