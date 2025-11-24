
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cormorant ,montserrat  } from "../app/font";

export default function CommitmentSection() {
  const stickyRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ["start start", "end end"],
  });

  // IMAGE 1: Zoom out from 1.3x to 1x scale
  const img1Scale = useTransform(scrollYProgress, [0, 0.2], [1.2, 1]);
  const img1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]); // Fades out when image 2 appears

  // IMAGE 2: Start completely off-screen
// const img2Y = useTransform(scrollYProgress, [0.2, 0.5], ["120%", "0%"]);
// const img2Scale = useTransform(scrollYProgress, [0.2, 0.5], [1.8, 1]);
// const img2Opacity = useTransform(scrollYProgress, [0.18, 0.2, 0.45, 0.5], [0, 1, 1, 1]);

// // IMAGE 3: Similarly adjust
// const img3Y = useTransform(scrollYProgress, [0.5, 0.8], ["120%", "0%"]);
// const img3Scale = useTransform(scrollYProgress, [0.5, 1], [1.5, 1]);
// const img3Opacity = useTransform(scrollYProgress, [0.48, 0.5, 0.8, 0.85], [0, 1, 1, 1]);
// IMAGE 2: Start completely off-screen
const img2Y = useTransform(scrollYProgress, [0.2, 0.45], ["120%", "0%"]);
const img2Scale = useTransform(scrollYProgress, [0.2, 0.45], [1.5, 1]);
const img2Opacity = useTransform(scrollYProgress, [0.18, 0.2, 0.45, 0.5], [0, 1, 1, 1]);

// IMAGE 3: Similarly adjust
const img3Y = useTransform(scrollYProgress, [0.5, 0.8], ["120%", "0%"]);
const img3Scale = useTransform(scrollYProgress, [0.5, 1], [1.5, 1]);
const img3Opacity = useTransform(scrollYProgress, [0.48, 0.5, 0.8, 0.85], [0, 1, 1, 1]);

  return (
    <div className="bg-black text-white">
      <div className="flex justify-center py-20 px-4">
        <div className="max-w-5xl text-center">
          <h1 className={`text-4xl md:text-6xl lg:text-[75px] font-medium tracking-wide mb-4 ${cormorant.className}`}>
            A commitment to conscience
          </h1>
          <p className={`text-lg md:text-[28px] font-normal text-[#FFFFFF] max-w-5xl mx-auto ${montserrat.className}`}>
            Each Maitri represents an unwavering dedication to environmental{" "}
            <br />
            stewardship. Certified climate-neutral, fully traceable, cultivated
            with reverence for our planet.{" "}
          </p>
        </div>
      </div>
{/* h-[calc(100vh-2rem)] */}
      {/* sticky container sized tall so scrollYProgress can drive the transitions */}
      <div ref={stickyRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* IMAGE 1: base layer with zoom effect */}
          <motion.div
            className="absolute inset-0 h-full w-full"
            style={{ 
              zIndex: 10, 
              y: "0%",
              opacity: img1Opacity
            }}
          >
            <motion.img
              src="\images\jewellery5.jpg"
              className="h-full w-full object-cover"
              draggable={false}
              style={{ scale: img1Scale }}
            />
            <div className="absolute top-60 left-10 max-w-2xl bg-opacity-70 p-6 rounded-lg">
              <h1 className="text-5xl font-bold mb-4">First Title</h1>
              <p className="text-2xl">Description for the first image. This text scrolls with the first image.</p>
            </div>
          </motion.div>

          {/* IMAGE 2: Second image */}
          <motion.div
            className="absolute inset-0 h-full w-full"
            style={{
              y: img2Y,
              zIndex: 20,
              opacity: img2Opacity
            }}
          >
            <motion.img
              src="\images\jewellery10.jpg"
              className="h-full w-full object-cover"
              draggable={false}
              style={{ scale: img2Scale }}
            />
            <div className="absolute top-60 left-10 max-w-2xl bg-opacity-70 p-6 rounded-lg">
              <h1 className="text-5xl font-bold mb-4">Second Title</h1>
              <p className="text-2xl">Description for the second image. This text scrolls with the second image.</p>
            </div>
          </motion.div>

          {/* IMAGE 3: Third image */}
          <motion.div
            className="absolute inset-0 h-full w-full"
            style={{
              y: img3Y,
              zIndex: 30,
              opacity: img3Opacity
            }}
          >
            <motion.img
              src="\images\jewellery8.jpg"
              className="h-full w-full object-cover"
              draggable={false}
              style={{ scale: img3Scale }}
            />
            <div className="absolute top-60 left-10 max-w-2xl bg-opacity-70 p-6 rounded-lg">
              <h1 className="text-5xl font-bold mb-4">Third Title</h1>
              <p className="text-2xl">Description for the third image. This text scrolls with the third image.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}