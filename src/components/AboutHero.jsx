import React from "react";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="bg-[#F9FAFB] px-6 md:px-20 py-16">
      <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto">
        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e8e5f6ab8d1"
            alt="Institution"
            className="rounded-3xl w-full h-auto shadow-xl object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full md:w-1/2 text-gray-800"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 leading-tight text-[#111827]">
            About Our Institution
          </h2>
          <p className="text-lg mb-6 leading-relaxed text-[#374151]">
            We are committed to academic excellence, innovation, and student empowerment.
            Our institution fosters a collaborative environment where knowledge meets creativity,
            nurturing the leaders and thinkers of tomorrow.
          </p>
          <p className="text-md text-[#6B7280]">
            With world-class infrastructure and a team of dedicated educators, we aim to
            provide holistic development that goes beyond the classroom.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
