import Navbar from "./components/Navbar";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Tesfaye - Portfolio</title>
        <meta name="description" content="A modern developer portfolio." />
      </Head>
      <div className="min-h-screen bg-gray-100">
        
        <Navbar />
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-4 text-black">Hi, I'm Tesfaye Tadesse</h1>
          <p className="text-xl text-gray-600">A Software Developer</p>
        </section>
      </div>
    </>
  );
}
