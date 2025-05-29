'use client'
import GraphicsGallery from "@/app/components/GraphicsGallery";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IllustrationGallery from "./components/IllustrationGallery"


export default function Home() {
  return (
    <>
    <Navbar />
    <About />
    <GraphicsGallery />
    <IllustrationGallery />
    <Contact />
    <Footer />
    </>
  );
}
