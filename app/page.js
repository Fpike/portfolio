'use client'
import GraphicsGallery from "@/app/components/GraphicsGallery";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IllustrationGallery from "./components/IllustrationGallery"
import UIGallery from "./components/UIGallery";
import SoftwareDevelopment from "./components/SoftwareDevelopment";
import Header from "./components/Header";


export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
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
