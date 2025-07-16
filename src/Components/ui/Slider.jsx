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
    }, 10000); 

    return () => clearInterval(interval); 
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
    </div>
  );
}

export default Slider;
