"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  text: string
}

interface SlidingTestimonialsProps {
  testimonials: Testimonial[]
}

export default function SlidingTestimonials({ testimonials }: SlidingTestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const firstRowControls = useAnimation()
  const secondRowControls = useAnimation()
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  useEffect(() => {
    if (isInView) {
      if (hoveredRow !== 1) {
        firstRowControls.start({
          x: "-100%",
          transition: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        })
      }

      if (hoveredRow !== 2) {
        secondRowControls.start({
          x: "100%",
          transition: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        })
      }
    }
  }, [isInView, firstRowControls, secondRowControls, hoveredRow])

  // Split testimonials into rows
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2))
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2))

  return (
    <div ref={containerRef} className="overflow-hidden py-6">
      {/* First row - slides from right to left */}
      <motion.div
        className="flex space-x-5 mb-5"
        initial={{ x: "100%" }}
        animate={firstRowControls}
        onHoverStart={() => setHoveredRow(1)}
        onHoverEnd={() => setHoveredRow(null)}
      >
        {firstRow.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
        {/* Duplicate testimonials to create seamless loop */}
        {firstRow.map((testimonial) => (
          <TestimonialCard key={`duplicate-${testimonial.id}`} testimonial={testimonial} />
        ))}
      </motion.div>

      {/* Second row - slides from left to right */}
      <motion.div
        className="flex space-x-5"
        initial={{ x: "-100%" }}
        animate={secondRowControls}
        onHoverStart={() => setHoveredRow(2)}
        onHoverEnd={() => setHoveredRow(null)}
      >
        {secondRow.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
        {/* Duplicate testimonials to create seamless loop */}
        {secondRow.map((testimonial) => (
          <TestimonialCard key={`duplicate-${testimonial.id}`} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  )
}

// Update the TestimonialCard component to use off-white colors and glow effects
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-black/70 backdrop-blur-sm px-8 py-5 rounded-xl border border-[#F5F5F5]/20 min-w-[400px] max-w-[400px] flex-shrink-0 transition-all duration-300 hover:border-[#F5F5F5]/40 hover:shadow-[0_0_15px_rgba(245,245,245,0.12)] group animate-pulse-glow">
      <div className="flex items-center mb-3">
        <Image
          src={testimonial.avatar || "/placeholder.svg"}
          alt={testimonial.name}
          width={36}
          height={36}
          className="rounded-full mr-3 object-cover"
        />
        <div>
          <h3 className="text-base font-semibold">{testimonial.name}</h3>
          <p className="text-xs text-gray-400">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors line-clamp-2">
        {testimonial.text}
      </p>
    </div>
  )
}
