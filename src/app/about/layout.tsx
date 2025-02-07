import { Metadata } from "next";
import Navbar from "../components/Navbar";


export const metadata: Metadata = {
    title: 'About Me',
    description: 'The page that highlight about me'
}

export default function AboutLayout({
    children,
}: Readonly<{children: React.ReactNode}>){
    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    )
}