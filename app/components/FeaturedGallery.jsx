import React from "react";
import Image from "next/image";
import { assets, galleryData } from "@/assets/assets";

const FeaturedGallery = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = React.useState(true);
  
  const activeItem = galleryData[activeIndex];

  const getSrc = (img) => (typeof img === "string" ? img : img.src);

  // Auto-scroll functionality
  React.useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1
      );
    }, 7500); // 7.5 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setIsAutoScrolling(false); // Stop auto-scroll when user manually navigates
        setActiveIndex((prevIndex) => 
          prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
        );
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setIsAutoScrolling(false); // Stop auto-scroll when user manually navigates
        setActiveIndex((prevIndex) => 
          prevIndex === galleryData.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle manual thumbnail click
  const handleThumbnailClick = (index) => {
    setIsAutoScrolling(false); // Stop auto-scroll when user manually selects
    setActiveIndex(index);
  };

  // Toggle auto-scroll
  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20 pt-16 bg-box">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Auto-scroll controls */}
        

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
          <div id="graphic" className="lg:w-1/2 lg:pl-8">
            <div className="top-32">
              <h3>
                {activeItem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 md:pt-8">
                {activeItem.description}
              </p>
              
              {/* Conditional tags - only show if specified in galleryData */}
              {(activeItem.tags && activeItem.tags.length > 0) && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeItem.tags.includes('Graphic Design') && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Graphic Design
                    </span>
                  )}
                  {activeItem.tags.includes('Branding') && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      Branding
                    </span>
                  )}
                </div>
              )}

              {/* Navigation indicators */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex gap-2">
                  {galleryData.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                        activeIndex === index ? 'bg-green' : 'bg-gray-300'
                      }`}
                      onClick={() => handleThumbnailClick(index)}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {activeIndex + 1} / {galleryData.length}
                </span>
                <span className="text-xs text-gray-400">
                  Use ← → arrow keys to navigate
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
                      ? 'ring-2 ring-blue-500 hover:opacity-75'
                      : 'hover:opacity-75'
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