import React, { useEffect, useState } from "react";

function Slider() {
  const slides = [
    "First slide",
    "Second slide",
    "Third slide"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 10000); // 10 saniyə

    return () => clearInterval(interval); // component unmountda intervali təmizlə
  }, [slides.length]);

  return (
    <div id="auto-play" className="relative w-full">
      <div className="carousel h-80">
        <div className="carousel-body h-full" style={{ opacity: 1 }}>
          {slides.map((text, i) => (
            <div
              key={i}
              className="carousel-slide"
              style={{ display: i === currentIndex ? "block" : "none" }}
            >
              <div className={`bg-base-200/60 flex h-full justify-center p-6`}>
                <span className="self-center text-2xl sm:text-4xl">{text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        type="button"
        className="carousel-prev start-5 max-sm:start-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
        onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
      >
        <span className="icon-[tabler--chevron-left] size-5 cursor-pointer"></span>
        <span className="sr-only">Previous</span>
      </button>

      <button
        type="button"
        className="carousel-next end-5 max-sm:end-3 carousel-disabled:opacity-50 size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow-base-300/20 shadow-sm"
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
      >
        <span className="icon-[tabler--chevron-right] size-5"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

export default Slider;
