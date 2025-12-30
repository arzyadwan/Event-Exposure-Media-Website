// components/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* 1. VIDEO BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60" // Opacity dikurangi agar teks terbaca
        >
          {/* SEMENTARA: Gunakan video placeholder ini. 
              Nanti ganti 'src' ini dengan URL Cloudinary video reel Anda. */}
          <source 
            src="https://res.cloudinary.com/demo/video/upload/v1687296767/concert_crowd_stock_video_q6o4wz.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Gradient Overlay untuk Readability Maksimal */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        
        {/* Animated Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl uppercase"
        >
          Eksekusi Event <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Tanpa Drama
          </span>
        </motion.h1>

        {/* Animated Subhead */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl font-light"
        >
          Mitra strategis untuk konferensi, gathering, dan peluncuran produk skala nasional. 
          Kami mengubah konsep menjadi momentum bisnis.
        </motion.p>

        {/* Animated CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <Link 
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:bg-yellow-400 hover:scale-105"
          >
            <span className="mr-2">Jadwalkan Konsultasi</span>
            <svg 
              className="h-4 w-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

      </div>

      {/* Scroll Indicator (Micro-interaction) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1">
          <div className="h-2 w-full animate-bounce rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  )
}