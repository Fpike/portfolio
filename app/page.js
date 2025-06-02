'use client'
import GraphicsGallery from "@/app/components/GraphicsGallery";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IllustrationGallery from "./components/IllustrationGallery"
import UIGallery from "./components/UIGallery";
import SoftwareDevelopment from "./components/SoftwareDevelopment";


export default function Home() {
  return (
    <>
    <Navbar />
    <About />
    <SoftwareDevelopment />
    <GraphicsGallery />
    <UIGallery />
    <IllustrationGallery />
    <Contact />
    <Footer />
    </>
  );
}
