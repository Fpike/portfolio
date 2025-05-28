import React from "react";
import Image from "next/image";
import { assets , galleryData } from "@/assets/assets";

const FeaturedGallery = () => {

  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeItem = galleryData[activeIndex];

  const getSrc = (img) => (typeof img === "string" ? img : img.src);

  return (
    <div id="graphic" className="w-full px-[12%] py-10 scroll-mt-20 pt-16 bg-box">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left side - Featured image aligned with page margin */}
          <div className="lg:w-1/2 flex justify-start">
            <div className="relative h-[500px] rounded-xl overflow-hidden" style={{ width: 'auto', minWidth: '300px' }}>
              <Image
                src={getSrc(activeItem.imgelink)}
                alt={activeItem.title}
                width={0}
                height={500}
                style={{
                  width: "auto",
                  height: "500px",
                  maxWidth: "100%",
                  objectFit: "contain"
                }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right side - Title and description */}
          <div className="lg:w-1/2 lg:pl-8">
            <div className="top-32">
              <h3>
                {activeItem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 md:pt-8">
                {activeItem.description}
              </p>
              
              {/* Optional: Add project details or tags here */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Graphic Design
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Branding
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail row with visible scrollbar */}
        <div className="mt-12">
          <div 
            className="flex gap-3 overflow-x-auto pb-4" 
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#9CA3AF #E5E7EB'
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                height: 8px;
              }
              div::-webkit-scrollbar-track {
                background: #E5E7EB;
                border-radius: 4px;
              }
              div::-webkit-scrollbar-thumb {
                background: #9CA3AF;
                border-radius: 4px;
              }
              div::-webkit-scrollbar-thumb:hover {
                background: #6B7280;
              }
            `}</style>
            {galleryData.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <div 
                  className={`relative h-20 w-20 cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
                    activeIndex === index 
                      ? 'hover:opacity-75' 
                      : 'hover:opacity-75'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    src={getSrc(item.imgelink)}
                    alt={item.title}
                    fill
                    style={{
                      objectFit: "cover"
                    }}
                    sizes="80px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGallery;