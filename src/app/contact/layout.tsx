import { Metadata } from "next";
import Navbar from "../components/NavBar";


export const metadata: Metadata = {
    title: 'Contact Me',
    description: 'Get in touch with me'
}
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}