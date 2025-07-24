import React from "react";

export default function LandingGallery() {
  const images = [
    "/gallery/photo1.jpg",
    "/gallery/photo2.jpg",
    "/gallery/photo3.jpg",
    "/gallery/photo4.jpg",
    "/gallery/photo5.jpg",
    "/gallery/photo6.jpg",
    "/gallery/photo7.jpg",
    "/gallery/photo8.jpg",
  ]

  return (
    <section className="bg-white py-16">
      <h2 className="text-3xl font-bold text-center mb-10">PHOTO GALLERY</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery ${i + 1}`}
            className="w-full h-56 object-cover rounded-md grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="/gallery"
          className="inline-block bg-yellow-700 text-white px-6 py-2 rounded hover:bg-yellow-800 transition"
        >
          Explore All
        </a>
      </div>
    </section>
  )
}
