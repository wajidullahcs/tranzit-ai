"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./button"; // ← Make sure the path is correct
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
const imageRef = useRef(null);


 useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
      <div className="space-y-6 text-center">
      <div space-y-6 mx-auto>

        {/* Hero Heading */}
        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
          Welcome to TranzitAI
        </h1>

        {/* Hero Subheading */}
        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
          Your AI-powered career assistant for resumes, cover letters, and interview preparation.
        </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          {/* Get Started Button */}
          <Link href="/dashboard">
            <Button size="lg" className="px-8 ">
              Get Started
            </Button>
          </Link>

          {/* LinkedIn Button */}
          <Link href="https://www.linkedin.com/in/wajid-ullah-43b156306/" target="_blank">
            <Button size="lg" variant="outline" className="px-8">
               LinkedIn Account
            </Button>
          </Link>
        </div>

     <div className="hero-image-wrapper mt-5 md:mt-0">
      <div ref={imageRef} className="hero-image">
        <Image
              src="/bg-image.png"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
            />
      </div>
     </div>

      </div>
    </section>
  );
};

export default HeroSection;