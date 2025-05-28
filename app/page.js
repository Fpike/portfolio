'use client'
import FeaturedGallery from "@/app/components/FeaturedGallery";
import About from "./components/About";
import GraphicDesign from "./components/GraphicDesign";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar />
    <About />
    {/* <GraphicDesign /> */}
    <FeaturedGallery />
    </>
  );
}
