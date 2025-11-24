"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Hero_section.png"
          alt="Hero Background"
          fill
          priority
          placeholder="blur"
          blurDataURL="/images/Hero_section.png"
          className="object-cover object-center"
        />
      </div>

      {/* Center Content */}
      <div className="flex items-center justify-center h-full px-4">
        <Image
          src="/images/white_logo.png"
          alt="Maitri Diamonds"
          width={380}
          height={380}
          priority
          className="object-contain drop-shadow-xl"
        />
      </div>
    </section>
  );
}
