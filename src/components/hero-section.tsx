import React from "react";
import hero from "../../public/hero-img.png";
import Image from "next/image";
function HeroSection() {
  return (
    <div className="w-full h-screen bg-hero-img bg-no-repeat bg-cover bg-center">
      <div className="flex flex-col items-center h-screen">
        <p className="font-semibold text-6xl text-cream400 pt-36 px-64">
          From Others Kitchen to Yours
        </p>
        <p>
          Whether you&#39;re a seasoned chef or just starting your kitchen
          adventures, we have something delicious for everyone.
        </p>
        <div className="h1">dfgdfg</div>
      </div>
    </div>
  );
}

export default HeroSection;
