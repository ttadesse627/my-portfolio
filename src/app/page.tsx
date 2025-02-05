import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 text-black">Hi, I'm Tesfaye Tadesse</h1>
        <p className="text-xl text-gray-600">A Software Developer</p>
      </section>
    </div>
  );
}
