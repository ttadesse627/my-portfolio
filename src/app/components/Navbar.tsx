export default function Navbar() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <span className="font-bold">Tesfaye T</span>
          <div className="space-x-4">
            <a href="#projects">Projects</a>
            <a href="/about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    );
  }