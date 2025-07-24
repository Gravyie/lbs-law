import React from "react";
import { motion } from "framer-motion"; // Make sure Framer Motion is installed

const infrastructureData = [
  {
    id: 1, // Important for React keys
    title: "Modern Library & Learning Hub",
    description:
      "Explore a vast collection of resources, from classic texts to cutting-edge digital archives, fostering a quiet and collaborative learning environment.",
    image:
      "https://images.unsplash.com/photo-1521056708688-299f18a58e1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Interactive Classrooms",
    description:
      "Our classrooms are designed for dynamic engagement, featuring smart technology, ergonomic seating, and optimized acoustics for effective teaching and learning.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dd97cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Advanced Laboratories",
    description:
      "State-of-the-art labs provide hands-on experience, equipped with modern instruments and dedicated spaces for experimentation across various scientific disciplines.",
    image:
      "https://images.unsplash.com/photo-1532187640-f5711b02130c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Vibrant Sports Complex",
    description:
      "Promoting holistic development, our sports complex includes facilities for indoor and outdoor games, encouraging physical fitness and team spirit.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Comfortable Student Residences",
    description:
      "Modern and secure on-campus residences offer a supportive living environment, fostering community and convenience for all students.",
    image:
      "https://images.unsplash.com/photo-1563294865-27f2f1813f4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Infrastructure = () => {
  // Framer Motion variants for the main content blocks (image + text)
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-gray-50 px-4 md:px-12 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-800 mb-12 tracking-tight leading-tight">
          Our <span className="text-blue-600">Infrastructure</span>
        </h2>

        <div className="space-y-10 lg:space-y-16">
          {infrastructureData.map((item, index) => (
            <motion.div
              key={item.id} // Always use a unique ID for the key prop
              initial="hidden"
              whileInView="show"
              variants={itemVariants}
              transition={{ delay: index * 0.08 }} // Subtle stagger for overall block
              viewport={{ once: true, amount: 0.4 }} // Trigger when 40% of block is visible
              className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16 ${ // Increased gap
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 rounded-xl shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-72 md:h-80 lg:h-96 object-cover object-center transition-transform duration-500 hover:scale-105" // Standard hover zoom
                />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
                {/* Removed extra button for cleaner look, can be added if needed */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;