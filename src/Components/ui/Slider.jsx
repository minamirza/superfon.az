import React, { useEffect, useState } from "react";

function Slider() {
  const slides = [
    "https://cdn.superfon.az/i/h/main/1000/148-033ba667deef68f5f6f2ff57f6210fd2.jpg",
    "https://cdn.superfon.az/i/h/main/1000/130-84c505d1388bcf495cbb568221cbea07.jpg",
    "https://cdn.superfon.az/i/h/main/1000/123-31c34c629d9b44e1ec8316c235183462.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="auto-play" className="relative w-full">
      <div className="carousel aspect-[16/9] overflow-hidden rounded">
        <div className="carousel-body h-full">
          {slides.map((url, i) => (
            <div
              key={i}
              className="carousel-slide h-full w-full transition-opacity duration-500"
              style={{ display: i === currentIndex ? "block" : "none" }}
            >
              <img
                src={url}
                alt={`Slide ${i + 1}`}
                className="object-cover w-full h-full rounded"
              />
            </div>
          ))}
        </div>
      </div>

{/* bu altindaki xettin kodu istemesen sil avto deyissin */}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onMouseEnter={() => goToSlide(i)}
            className={`h-1 w-10 rounded transition-all duration-300 cursor-pointer ${
              i === currentIndex ? "bg-purple-700 w-12" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
