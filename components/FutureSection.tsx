// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { cormorant ,montserrat  } from "../app/font";

// interface VideoWithThumbnailProps {
//   thumbSrc: string;
//   videoSrc: string;
//   alt: string;
//   isHovered: boolean;
//   onHover: (hovered: boolean) => void;
// }

// function VideoWithThumbnail({
//   thumbSrc,
//   videoSrc,
//   alt,
//   isHovered,
//   onHover,
// }: VideoWithThumbnailProps) {
//   const [showVideo, setShowVideo] = useState(false);
//   const [buttonHovered, setButtonHovered] = useState(false);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setShowVideo(true);
//           }
//         });
//       },
//       { threshold: 0.25 } // trigger when 25% visible
//     );

//     observer.observe(containerRef.current);

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (showVideo && videoRef.current) {
//       videoRef.current.play().catch(() => {});
//     }
//   }, [showVideo]);

//   return (
//     <div
//       className="relative w-full h-full"
//       ref={containerRef}
//       onMouseEnter={() => onHover(true)}
//       onMouseLeave={() => onHover(false)}
//     >
//       {/* Thumbnail */}
//       <Image
//         src={thumbSrc}
//         alt={alt}
//         fill
//         className={`object-cover object-center transition-opacity duration-1000 ${
//           showVideo ? "opacity-0" : "opacity-100"
//         }`}
//         priority={false} // lazy
//       />

//       {/* Video */}
//       {/* right side modal video */}
//       {showVideo && (
//         <video
//           ref={videoRef}
//           src={videoSrc}
//           // src='https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531588/jewellary_1_rsbpa3.mp4'
//           loop
//           muted
//           autoPlay
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-1000 opacity-100 cursor-pointer"
//         />
//       )}

//       {/* Explore Button */}
//       <div
//         className={`absolute inset-0 flex items-end bottom-20 justify-center transition-all duration-500 ${
//           isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <button
//           className="relative text-white text-2xl font-medium tracking-wide group cursor-pointer"
//           onMouseEnter={() => setButtonHovered(true)}
//           onMouseLeave={() => setButtonHovered(false)}
//         >
//           EXPLORE
//           <span
//             className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-500 ${
//               buttonHovered ? "w-0" : "w-full"
//             }`}
//           ></span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function FutureSection() {
//   const [leftHovered, setLeftHovered] = useState(false);
//   const [rightHovered, setRightHovered] = useState(false);

//   return (
//     <section className="bg-white overflow-hidden">
//       {/* === TEXT ROW === */}
//       <div className="w-full flex flex-col lg:flex-row px-6 md:px-10 lg:px-16 py-10 lg:py-16">
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:pr-8">
//           {/* <h2 className="text-3xl md:text-4xl lg:text-[60px] font-Cormorant Garamond tracking-[4px] text-center lg:text-left leading-snug ">
//             FUTURE OF DIAMONDS
//           </h2> */}
//           <h2
//             className={`${cormorant.className} text-3xl md:text-4xl lg:text-[60px] tracking-[2px] leading-snug font-medium `}
//           >
//             FUTURE OF DIAMONDS
//           </h2>
//         </div>

//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center lg:pl-8 mt-6 lg:mt-0">
//           <p className={`text-black text-base md:text-lg lg:text-[20px] font-medium leading-snug text-center tracking-tight lg:text-left ${montserrat.className} `} >
//             The world's fully traceable, 100% Climate Neutral and <br />
//             Sustainability Rated Lab-Grown Diamonds.
//             <br />
//             Grown in our Indian laboratory using patented CVD technology.
//           </p>
//         </div>
//       </div>

//       {/* === VIDEO ROW === */}
//       <div className="relative flex flex-col md:flex-row w-full h-[calc(100vh-6rem)]">
//         {/* Center logo overlay */}
//         <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
//           <Image
//             src="/images/logo_icon.png"
//             alt="Icon"
//             width={180}
//             height={180}
//             priority
//             className="opacity-90 object-contain"
//           />
//         </div>

//         {/* Left Video */}
//         <div className="relative w-full md:w-1/2 h-1/2 md:h-full cursor-pointer">
//           <VideoWithThumbnail
//             thumbSrc="/images/jewelry-hand.jpg"
//             videoSrc='https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531588/jewellary_1_rsbpa3.mp4'

//             // videoSrc="/videos/jewelry-hand.mp4"
//             alt="Jewelry on hand"
//             isHovered={leftHovered}
//             onHover={setLeftHovered}
//           />
//         </div>

//         {/* Right Video */}
//         <div className="relative w-full md:w-1/2 h-1/2 md:h-full cursor-pointer">
//           <VideoWithThumbnail
//             thumbSrc="/images/model.jpg"
//             videoSrc="https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531510/jewellary_g4sgie.mp4"
//             // videoSrc="/videos/model.mp4"
//             alt="Model"
//             isHovered={rightHovered}
//             onHover={setRightHovered}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cormorant, montserrat } from "../app/font";

interface VideoWithThumbnailProps {
  thumbSrc: string;
  videoSrc: string;
  alt: string;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

function VideoWithThumbnail({
  thumbSrc,
  videoSrc,
  alt,
  isHovered,
  onHover,
}: VideoWithThumbnailProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowVideo(true);
            observer.disconnect(); // Stop observing once visible
          }
        });
      },
      { 
        threshold: 0.25,
        rootMargin: '50px' // Start loading slightly before it comes into view
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (showVideo && videoRef.current) {
      // Preload the video when it becomes visible
      videoRef.current.load();
    }
  }, [showVideo]);

  const handleVideoCanPlay = () => {
    setVideoReady(true);
    // Start playing only when video is ready
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn("Video autoplay failed:", error);
        // If autoplay fails, keep showing thumbnail
        setVideoReady(false);
      });
    }
  };

  const handleVideoError = () => {
    console.error("Video loading failed");
    setVideoReady(false);
    setShowVideo(false);
  };

  const handleVideoWaiting = () => {
    // If video buffers, show thumbnail again
    setVideoReady(false);
  };

  const handleVideoPlaying = () => {
    // Video is actually playing now
    setVideoReady(true);
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      ref={containerRef}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Thumbnail - Only hides when video is fully ready and playing */}
      <Image
        src={thumbSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-cover object-center transition-opacity duration-700 ease-in-out ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        priority={false}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9CSaU5xxMqSqLlmhl+4PkYwAAA"
      />

      {/* Video - Always in DOM when visible but controlled by opacity */}
      {showVideo && (
        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          preload="auto"
          poster={thumbSrc} // Use thumbnail as poster to avoid flash
          onCanPlay={handleVideoCanPlay}
          onPlaying={handleVideoPlaying}
          onWaiting={handleVideoWaiting}
          onError={handleVideoError}
          className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      )}


      {/* Explore Button */}
      <div
        className={`absolute inset-0 flex items-end justify-center pb-20 transition-all duration-500 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="relative text-white text-2xl font-medium tracking-wide group cursor-pointer"
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          EXPLORE
          <span
            className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-500 ${
              buttonHovered ? "w-0" : "w-full"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
}

export default function FutureSection() {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  return (
    <section className="bg-white overflow-hidden">
      {/* === TEXT ROW === */}
      <div className="w-full flex flex-col lg:flex-row px-6 md:px-10 lg:px-16 py-10 lg:py-16">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center lg:pr-8">
          <h2
            className={`${cormorant.className} text-3xl md:text-4xl lg:text-[60px] tracking-[2px] leading-snug font-medium text-center lg:text-left`}
          >
            FUTURE OF DIAMONDS
          </h2>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center lg:pl-8 mt-6 lg:mt-0">
          <p
            className={`text-black text-base md:text-lg lg:text-[20px] font-medium leading-snug text-center tracking-tight lg:text-left ${montserrat.className}`}
          >
            The world&apos;s fully traceable, 100% Climate Neutral and <br />
            Sustainability Rated Lab-Grown Diamonds.
            <br />
            Grown in our Indian laboratory using patented CVD technology.
          </p>
        </div>
      </div>

      {/* === VIDEO ROW === */}
      <div className="relative flex flex-col md:flex-row w-full h-[calc(100vh-6rem)]">
        {/* Center logo overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <Image
            src="/images/logo_icon.png"
            alt="Diamond Icon"
            width={180}
            height={180}
            priority
            className="opacity-90 object-contain"
            sizes="180px"
          />
        </div>

        {/* Left Video */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full cursor-pointer">
          <VideoWithThumbnail
            thumbSrc="/images/jewelry-hand.jpg"
            videoSrc="https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531588/jewellary_1_rsbpa3.mp4"
            alt="Elegant jewelry displayed on hand"
            isHovered={leftHovered}
            onHover={setLeftHovered}
          />
        </div>

        {/* Right Video */}
        <div className="relative w-full md:w-1/2 h-1/2 md:h-full cursor-pointer">
          <VideoWithThumbnail
            thumbSrc="/images/model.jpg"
            videoSrc="https://res.cloudinary.com/dkawkv0gk/video/upload/v1763531510/jewellary_g4sgie.mp4"
            alt="Model showcasing diamond jewelry"
            isHovered={rightHovered}
            onHover={setRightHovered}
          />
        </div>
      </div>
    </section>
  );
}

