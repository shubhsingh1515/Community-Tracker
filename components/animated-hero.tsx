"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import { Header } from "./header";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const cloudLeftRef = useRef<HTMLImageElement>(null);
  const cloudRightRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const img = imageWrapperRef.current;
    const cloudLeft = cloudLeftRef.current;
    const cloudRight = cloudRightRef.current;

    if (!hero || !img || !cloudLeft || !cloudRight) return;

    /** 🔥 IMAGE PARALLAX + SCALE ANIMATION */
    gsap.fromTo(
      img,
      { scale: 1, y: 0, z: 0, transformPerspective: 800 },
      {
        scale: 1.12,
        y: -150,
        z: 60,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom+=300 top",
          scrub: 1.6,
        },
      }
    );

    /** ☁️ CLOUD PARALLAX — slow drifting movement */
    gsap.to(cloudLeft, {
      x: -60,
      y: 20,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1.4,
      },
    });

    gsap.to(cloudRight, {
      x: 60,
      y: 30,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1.4,
      },
    });

    /** Fade-in hero text */
    gsap.from(".hero-title, .hero-desc, .hero-buttons", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-b from-[#afd8f7] via-[#F5F8FB] to-[#EBD9CC] pt-20 px-4 overflow-hidden"
    >
      {/* HEADER */}
      {/* <div className="absolute top-0 left-0 right-0 z-30">
        <Header />
      </div> */}

      {/* ☁️ CLOUD LEFT */}
      <img
        ref={cloudLeftRef}
        src="/images/cloud1.png" // ← replace path
        alt="Cloud left"
        className="absolute left-0 top-40 w-[260px] opacity-90 z-10 pointer-events-none"
      />

      {/* ☁️ CLOUD RIGHT */}
      <img
        ref={cloudRightRef}
        src="/images/cloud2.png" // ← replace path
        alt="Cloud right"
        className="absolute right-0 top-52 w-[260px] opacity-90 z-10 pointer-events-none"
      />

      {/* HERO TEXT */}
      <div className="max-w-5xl mx-auto relative z-20 text-center space-y-8 mt-8">
        <div className="hero-title text-5xl md:text-7xl font-semibold leading-tight">
          Monitor Every Conversation <br />
          That Matters to Your SaaS
        </div>

        <p className="hero-desc text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Track keywords, community discussions, and competitor mentions across
          Reddit, Hacker News, Slack groups, Twitter, Discord, and niche forums
          — all from one dashboard.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center pt-6">
          {/* Primary Button */}
          <a
            href="https://calendly.com/adarsh-ilu/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="
        px-8 py-6 text-base font-bold rounded-full
       bg-black
        text-white shadow-md
        transition-all duration-300 ease-out
        hover:shadow-xl hover:bg-white hover:text-black hover:scale-[1.05] hover:border hover:border-black
        active:scale-[0.98]
      "
            >
              Start Tracking for Free
            </Button>
          </a>

          {/* Outline Button */}
          <Link href="#features">
            <Button
              variant="outline"
              className="
        px-8 py-6 text-base rounded-full
        border-2 border-gray-300 text-gray-700
        transition-all duration-300 ease-out
        hover:border-[#090909] hover:text-[#121212]
        hover:bg-[#5B7CFF]/10 hover:scale-[1.05]
        active:scale-[0.98]
      "
            >
              See Live Demo
            </Button>
          </Link>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="mt-20 max-w-3xl mx-auto relative h-80 md:h-[400px]">
        <div
          ref={imageWrapperRef}
          className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 mb-[-5rem]"
        >
          <img
            src="/hero.png" // ← replace path"
            alt="Dashboard"
            className="w-full h-full "
          />
        </div>
      </div>
    </section>
  );
}
