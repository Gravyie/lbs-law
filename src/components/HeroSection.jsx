import React from "react";
import { useEffect, useState } from "react";

const images = [
  "/images/hero1.jpg", // replace with your actual image paths
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen w-full relative">
      {/* Carousel */}
      <div className="h-3/4 w-full overflow-hidden relative">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Optional: Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className="h-1/4 bg-white px-8 md:px-16 py-8 text-center">
        <h1 className="text-yellow-600 text-3xl md:text-5xl font-bold">
           L.B.S. LAW COLLEGE
        </h1>
        <p className="mt-4 text-gray-700 max-w-4xl mx-auto">
          Nestled in a serene academic environment, L.B.S. Law College stands as a proud institution under the esteemed banner of the City Group of Colleges. Strategically located in the vibrant academic hub of Lucknow, the college is dedicated to nurturing future legal professionals with a strong foundation in justice, ethics, and excellence. With a commitment to holistic legal education, L.B.S. Law College offers a dynamic learning environment supported by experienced faculty and a robust academic framework.
        </p>
      </div>
    </section>
  );
}
