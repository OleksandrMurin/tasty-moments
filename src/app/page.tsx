import { redirect } from "next/navigation";
export const connectionString = "http://localhost:8080";
// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect("/en");
}
