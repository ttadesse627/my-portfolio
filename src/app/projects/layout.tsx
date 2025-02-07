import { Metadata } from "next";
import Navbar from "../components/Navbar";


export const metadata: Metadata = {
    title: 'Projects',
    description: 'description of the projects'
}
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}