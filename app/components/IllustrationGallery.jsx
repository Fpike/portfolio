import React from "react";
import Image from "next/image";
import { assets, illustrationData } from "@/assets/assets";

const IllustrationGallery = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = React.useState(true);
  
  const activeItem = illustrationData[activeIndex];

  const getSrc = (img) => (typeof img === "string" ? img : img.src);

  // Auto-scroll functionality
  React.useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === illustrationData.length - 1 ? 0 : prevIndex + 1
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
          prevIndex === 0 ? illustrationData.length - 1 : prevIndex - 1
        );
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setIsAutoScrolling(false); // Stop auto-scroll when user manually navigates
        setActiveIndex((prevIndex) => 
          prevIndex === illustrationData.length - 1 ? 0 : prevIndex + 1
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
    <div id="illustration" className="w-full px-[12%] bg-box scroll-mt-20 py-8 md:py-24 md:pt-24">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Mobile title - only visible on mobile, positioned above image */}
          <div className="w-full lg:hidden order-1">
            <h3>
              {activeItem.title}
            </h3>
          </div>

          {/* Left side - Featured image */}
          <div className="w-full lg:w-1/2 flex justify-start order-2 lg:order-1">
            <div className="relative h-[294.81px] lg:h-[450px] w-full max-w-[450px] rounded-xl overflow-hidden">
              <Image
                src={getSrc(activeItem.imgelink)}
                alt={activeItem.title}
                width={0}
                height={0}
                style={{
                  width: "100%",
                  height: "294.81px",
                  maxWidth: "100%",
                  objectFit: "contain"
                }}
                className="lg:!h-[450px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right side content - reordered for mobile */}
          <div className="w-full lg:w-1/2 order-3 lg:order-2">
            <div className="lg:sticky lg:top-32">
              {/* Desktop title - hidden on mobile */}
              <h3 className="hidden lg:block">
                {activeItem.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8 md:pt-8">
                {activeItem.description}
              </p>
              
              {/* Conditional tags - only show if specified in illustrationData */}
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
                  {activeItem.tags.includes('Illustration') && (
                    <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-full text-sm font-medium">
                      Illustration
                    </span>
                  )}
                </div>
              )}

              {/* Navigation indicators - hidden on mobile */}
              <div className="hidden md:flex items-center gap-4 mb-8">
                <div className="flex gap-2">
                  {illustrationData.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                        activeIndex === index ? 'bg-greenCustom' : 'bg-gray-300'
                      }`}
                      onClick={() => handleThumbnailClick(index)}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {activeIndex + 1} / {illustrationData.length}
                </span>
                <span className="text-xs text-gray-800">
                  Use ← → arrow keys to navigate
                </span>
              </div>

              {/* Thumbnail grid */}
              <div className="mt-4">
                <div className="grid grid-cols-6 gap-3">
                  {illustrationData.map((item, index) => (
                    <div key={index} className="aspect-square">
                      <div
                        className={`relative w-full h-full cursor-pointer rounded-lg overflow-hidden transition-all duration-200 ${
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
                          sizes="(max-width: 1024px) 16vw, 8vw"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationGallery;