
import React from "react";
import Image from "next/image";
import { assets, UIData } from "@/assets/assets";

const UIGallery = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = React.useState(true);
  
  const activeItem = UIData[activeIndex];

  const getSrc = (img) => (typeof img === "string" ? img : img.src);

  // Auto-scroll functionality
  React.useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === UIData.length - 1 ? 0 : prevIndex + 1
      );
    }, 7500); // 7.5 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setIsAutoScrolling(false);
        setActiveIndex((prevIndex) => 
          prevIndex === 0 ? UIData.length - 1 : prevIndex - 1
        );
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setIsAutoScrolling(false);
        setActiveIndex((prevIndex) => 
          prevIndex === UIData.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle manual thumbnail click
  const handleThumbnailClick = (index) => {
    setIsAutoScrolling(false);
    setActiveIndex(index);
  };

  // Navigation functions for buttons
  const navigateImage = (direction) => {
    setIsAutoScrolling(false);
    if (direction === 'prev') {
      setActiveIndex(prev =>
        prev === 0 ? UIData.length - 1 : prev - 1
      );
    } else {
      setActiveIndex(prev =>
        prev === UIData.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <div id="ui" className="w-full px-[12%] py-8 md:py-10 scroll-mt-20 md:pt-16">
      <div className="w-full max-w-7xl mx-auto md:px-4">

        {/* Content section - two columns with divider */}
        <div className="flex flex-col lg:flex-row gap-8 mb-2 relative">
          {/* Left column - Title (1/5 width) */}
          <div className="flex flex-col lg:w-1/5">
            <h3 className="text-gray-900">
              {activeItem.title}
            </h3>
            
            {/* Conditional tags */}
          </div>

          {/* Right column - Description (4/5 width) */}
          <div className="flex flex-col lg:w-4/5 lg:pl-8 relative">
            {/* Vertical divider - positioned relative to this column */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
            
            <p className="text-gray-600 leading-relaxed text-base pb-8 md:pb-0">
              {activeItem.description}
            </p>
          </div>
        </div>
        
        {/* Main image - full width */}
        <div className="w-full md:mb-8 md:pt-8 relative">
          <div className="relative w-full aspect-[16/9] md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src={getSrc(activeItem.imgelink)}
              alt={activeItem.title}
              fill
              style={{
                objectFit: "contain"
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
              quality={95}
              unoptimized={false}
            />

            {/* Navigation arrows */}
            {UIData.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Navigation section - full width */}
        <div className="w-full">
          {/* Navigation indicators */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-2">
              {UIData.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                    activeIndex === index ? 'bg-greenCustom' : 'bg-gray-300'
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 pt-2">
              {activeIndex + 1} / {UIData.length}
            </span>
            <span className="text-xs text-gray-400 hidden md:inline">
              Use ← → arrow keys to navigate
            </span>
          </div>

          {/* Thumbnail scroll bar */}
          <div className="w-full overflow-x-auto">
            <div className="flex gap-3 pb-2" style={{ minWidth: 'max-content' }}>
              {UIData.map((item, index) => (
                <div key={index} className="flex-shrink-0">
                  <div
                    className={`relative w-20 h-20 cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
                      activeIndex === index
                        ? 'ring-2 ring-blue-500 opacity-100'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <Image
                      src={getSrc(item.imgelink)}
                      alt={item.title}
                      fill
                      style={{
                        objectFit: "cover"
                      }}
                      sizes="80px"
                      quality={85}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UIGallery;
