import {redirect} from "next/navigation";
// This page only renders when the app is built statically (output: 'export')
const RootPage = () => redirect("/en");
export default RootPage
