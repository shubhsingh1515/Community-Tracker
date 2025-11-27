"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export function AnimatedHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    const img = imageWrapperRef.current
    if (!hero || !img) return

    /** 🔥 IMAGE PARALLAX + SCALE ANIMATION LIKE DREELIO */
    gsap.fromTo(
      img,
      {
        scale: 1,
        y: 0,
        z: 0,
        transformPerspective: 800,
      },
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
    )

    /** OPTIONAL: Slight fade/slide in hero text */
    gsap.from(".hero-title, .hero-desc, .hero-buttons", {
      opacity: 0,
      y: 40,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-b from-[#E8F1F8] via-[#F5F8FB] to-[#EBD9CC] pt-20 px-4 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 z-30">
        <Header />
      </div>

      {/* HERO TEXT */}
      <div className="max-w-5xl mx-auto relative z-20 text-center space-y-8 mt-8">
        <div className=" text-6xl md:text-7xl font-semibold leading-tight">
          Run your freelance <br /> business like a pro
        </div>

        <p className="hero-desc text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          All-in-one platform for managing clients, projects, and payments without the chaos.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link href="/signup">
            <Button className="bg-secondary text-secondary-foreground px-8 py-6 text-base font-bold rounded-full">
              Try Dreelio free
            </Button>
          </Link>

          <Link href="#features">
            <Button variant="outline" className="px-8 py-6 text-base rounded-full">
              See features
            </Button>
          </Link>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="mt-20 max-w-5xl mx-auto relative h-96 md:h-[650px]">
        <div
          ref={imageWrapperRef}
          className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 mb-[-5rem]"
        >
          <img
            src="/freelance-business-dashboard-with-analytics-charts.jpg"
            alt="Dashboard"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
