import Image from "next/image";

export default function Navbar() {
    return (
<>

      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <a href="/">
            <Image
              src="/profile.jpg"
              alt="Tesfaye"
              width={50}
              height={40}
              className="rounded-full"
            />
          </a>
          <div className="space-x-4">
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/contact">Contact Me</a>
          </div>
        </div>
      </nav>
</>
    );
  }