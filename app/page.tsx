"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import WordRevealText from "./components/word-reveal-text"
import SlidingTestimonials from "./components/sliding-testimonials"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)
  const accessibilityRef = useRef<HTMLDivElement>(null)
  const voiceControlRef = useRef<HTMLDivElement>(null)
  const aiDescriptionRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const getStartedRef = useRef<HTMLDivElement>(null)

  const isAccessibilityInView = useInView(accessibilityRef, { once: true, amount: 0.5 })
  const isVoiceControlInView = useInView(voiceControlRef, { once: true, amount: 0.5 })
  const isAiDescriptionInView = useInView(aiDescriptionRef, { once: true, amount: 0.5 })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.5 })
  const isGetStartedInView = useInView(getStartedRef, { once: true, amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Michael Roberts",
      role: "Blind since birth, Software Developer",
      avatar: "https://picsum.photos/seed/michael/200/200",
      text: "Cight Browser has transformed how I navigate the web. The voice commands are intuitive, and the AI descriptions of images give me context I never had before.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Low vision, Accessibility Advocate",
      avatar: "https://picsum.photos/seed/sarah/200/200",
      text: "The high-contrast modes and magnification options in Cight Browser are customizable to my exact needs. I can finally browse independently without eye strain.",
    },
    {
      id: 3,
      name: "Dr. Emily Chen",
      role: "Ophthalmologist, Vision Research",
      avatar: "https://picsum.photos/seed/emily/200/200",
      text: "I recommend Cight Browser to all my patients with degenerative vision conditions. The thoughtful design helps them maintain independence as their vision changes.",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Partially sighted, Teacher",
      avatar: "https://picsum.photos/seed/james/200/200",
      text: "The form-filling assistance is a game-changer. I used to need help with online forms, but Cight Browser makes it simple and accessible.",
    },
    {
      id: 5,
      name: "Maria Gonzalez",
      role: "Caregiver for visually impaired parent",
      avatar: "https://picsum.photos/seed/maria/200/200",
      text: "My father has regained his independence online thanks to Cight Browser. The simplified navigation and voice controls have given him confidence to explore the web again.",
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Web Developer, WCAG Specialist",
      avatar: "https://picsum.photos/seed/alex/200/200",
      text: "As someone who builds accessible websites, I'm impressed by how Cight Browser enhances the experience beyond standard accessibility features. It's truly innovative.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#111111] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 sticky top-0 z-50 bg-gradient-to-r from-[#0A0A0A]/90 to-[#111111]/90 backdrop-blur-md">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4Z"
                  stroke="#f6eac0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 8L10 12L6 16"
                  stroke="#f6eac0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M12 16H18" stroke="#f6eac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="ml-2 text-xl font-bold tracking-wider">CIGHT</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/accessibility" className="text-gray-300 hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="btn-primary"
          >
            Log in
          </Link>
          <Link
            href="/download"
            className="btn-download"
          >
            Download
          </Link>
        </div>
      </nav>

      {/* Notification Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-4xl mx-auto my-8 px-6 py-4 bg-gradient-to-r from-[#1A1A1A] to-[#222222] rounded-lg border border-[#F5F5F5]/10 shadow-[0_0_15px_rgba(245,245,245,0.05)] flex items-center justify-center"
      >
        <div className="flex items-center space-x-2 text-center">
          <svg className="w-5 h-5 text-[#F5F5F5]" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-300">
            Demo will be launching soon for the businesses
            <Link href="/try" className="text-[#F5F5F5] hover:underline ml-1 animate-text-glow">
              try them for free
            </Link>
            <span className="ml-1">↗</span>
          </p>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight wave-gradient-text animate-text-glow"
        >
          See the Web Differently
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
        >
          Cight Browser is an innovative, accessible web browser designed specifically for individuals with visual
          impairments.
        </motion.p>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12"
        >
          <Link
            href="/download"
            className="btn-primary inline-flex items-center px-8 py-4 text-lg font-medium rounded-md transform hover:scale-105"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#f6eac0" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4Z"
                stroke="#f6eac0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 8L10 12L6 16"
                stroke="#f6eac0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 16H18" stroke="#f6eac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Launch Cight Browser
          </Link>
          
          <div className="mt-4">
            <Link href="/options" className="text-gray-400 hover:text-white text-sm animate-fade-in">
              No need to Download
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Video Section */}
      <div ref={videoRef} className="w-full min-h-[85vh] relative my-20">
        <motion.div
          style={{ opacity }}
          className="w-full h-full bg-gradient-to-r from-[#111111] to-[#1A1A1A] flex items-center justify-center"
        >
          <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden border border-[#F5F5F5]/10 shadow-[0_0_30px_rgba(245,245,245,0.05)]" style={{ aspectRatio: "16/9" }}>
            <iframe 
              src="https://www.youtube.com/embed/hAP2QF--2Dg" 
              title="Cight Browser Demo"
              width="100%"
              height="100%"
              className="absolute"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Accessibility Section */}
      <div ref={accessibilityRef} className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: isAccessibilityInView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight wave-gradient-text animate-text-glow mb-12"
        >
          Accessibility = Independence
        </motion.h2>

        <WordRevealText
          text="Cight Browser is your gateway to digital independence, seamlessly balancing powerful accessibility features with an intuitive interface. This thoughtful design ensures everyone can navigate the web confidently, regardless of visual ability."
          className="text-3xl md:text-4xl lg:text-5xl leading-tight"
        />
      </div>

      {/* Voice Control Section */}
      <div ref={voiceControlRef} className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVoiceControlInView ? 1 : 0, x: isVoiceControlInView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-[#F5F5F5] text-xl font-semibold mb-4 animate-text-glow"
        >
          # Voice Control
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVoiceControlInView ? 1 : 0, y: isVoiceControlInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              Navigate with your <span className="wave-gradient-text animate-text-glow">voice</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVoiceControlInView ? 1 : 0, y: isVoiceControlInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 mb-12"
            >
              Cight Browser features advanced voice recognition that understands natural commands. Navigate, search, and
              interact with web content using just your voice.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVoiceControlInView ? 1 : 0, y: isVoiceControlInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full rounded-xl overflow-hidden shadow-[0_0_30px_rgba(245,245,245,0.1)] border border-[#F5F5F5]/20 md:col-span-2"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe 
              src="https://www.youtube.com/embed/p8jHPwh5Rmc" 
              title="Voice Control Feature"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* Accessibility Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVoiceControlInView ? 1 : 0, x: isVoiceControlInView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-[#F5F5F5] text-xl font-semibold mb-4 animate-text-glow"
        >
          # Accessibility Features
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVoiceControlInView ? 1 : 0, y: isVoiceControlInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full rounded-xl overflow-hidden shadow-[0_0_30px_rgba(245,245,245,0.1)] border border-[#F5F5F5]/20 md:col-span-2"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe 
              src="https://www.youtube.com/embed/bf2tFixliMA" 
              title="Accessibility Features"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>

          <div className="md:col-span-1">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVoiceControlInView ? 1 : 0, y: isVoiceControlInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              Enhanced <span className="wave-gradient-text animate-text-glow">accessibility</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVoiceControlInView ? 1 : 0, y: isVoiceControlInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 mb-12"
            >
              Cight Browser offers customizable contrast modes, screen magnification, and keyboard navigation designed
              specifically for users with visual impairments.
            </motion.p>
          </div>
        </div>
      </div>

      {/* AI Description Section */}
      <div ref={aiDescriptionRef} className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isAiDescriptionInView ? 1 : 0, x: isAiDescriptionInView ? 0 : -50 }}
          transition={{ duration: 0.8 }}
          className="text-[#F5F5F5] text-xl font-semibold mb-4 animate-text-glow"
        >
          # AI Description
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isAiDescriptionInView ? 1 : 0, y: isAiDescriptionInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              See images through <span className="wave-gradient-text animate-text-glow">AI descriptions</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isAiDescriptionInView ? 1 : 0, y: isAiDescriptionInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 mb-12"
            >
              Our advanced AI automatically describes images, charts, and visual content, providing context and
              understanding that goes beyond basic alt text.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isAiDescriptionInView ? 1 : 0, y: isAiDescriptionInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full rounded-xl overflow-hidden shadow-[0_0_30px_rgba(245,245,245,0.1)] border border-[#F5F5F5]/20 md:col-span-2"
            style={{ aspectRatio: "16/9" }}
          >
            <iframe 
              src="https://www.youtube.com/embed/aAvDI1qae-U" 
              title="AI Image Description Feature"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div ref={testimonialsRef} className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isTestimonialsInView ? 1 : 0, y: isTestimonialsInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold tracking-tight wave-gradient-text animate-text-glow text-center mb-6"
        >
          Changing Lives
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isTestimonialsInView ? 1 : 0, y: isTestimonialsInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-16"
        >
          Hear from users whose digital lives have been transformed by Cight Browser.
        </motion.p>

        <SlidingTestimonials testimonials={testimonials} />
      </div>

      {/* Get Started Section */}
      <div ref={getStartedRef} className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isGetStartedInView ? 1 : 0, y: isGetStartedInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-6"
        >
          <span className="text-white">Get Started for </span>
          <span className="wave-gradient-text animate-text-glow">Free</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isGetStartedInView ? 1 : 0, y: isGetStartedInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          Cight Browser is and will always be free. Our mission is to make the web accessible to everyone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isGetStartedInView ? 1 : 0, y: isGetStartedInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            href="/download"
            className="btn-primary inline-flex items-center px-8 py-4 text-lg font-medium rounded-md transform hover:scale-105"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#f6eac0" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4Z"
                stroke="#f6eac0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 8L10 12L6 16"
                stroke="#f6eac0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M12 16H18" stroke="#f6eac0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Launch Cight Browser
          </Link>
        </motion.div>

        {/* Footer */}
        <div className="border-t border-[#F5F5F5]/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4Z"
                      stroke="#F5F5F5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 8L10 12L6 16"
                      stroke="#F5F5F5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 16H18" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="ml-2 text-lg font-bold tracking-wider">CIGHT</span>
              </div>
              <p className="text-gray-500 text-sm">Copyright © 2025. All rights reserved.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#F5F5F5]">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility-statement" className="text-gray-400 hover:text-white transition-colors">
                    Accessibility Statement
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#F5F5F5]">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-gray-400 hover:text-white transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#F5F5F5]">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://discord.com"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    Discord{" "}
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://twitter.com"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    Twitter{" "}
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    GitHub{" "}
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
