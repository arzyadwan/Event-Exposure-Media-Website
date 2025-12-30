'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Interface Data (Strict)
interface ProjectProps {
  data: {
    _id: string;
    title: string;
    slug: { current: string };
    imageUrl: string;
    category: string;
  }
}

export default function ProjectCard({ data }: ProjectProps) {
  return (
    <Link href={`/work/${data.slug.current}`} className="group block w-full h-full">
      <motion.div 
        className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gray-900"
        whileHover="hover"
        initial="rest"
      >
        {/* 1. IMAGE LAYER */}
        {data.imageUrl ? (
          <motion.div 
            className="h-full w-full relative"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={data.imageUrl}
              alt={data.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        ) : (
          // Fallback jika tidak ada gambar
          <div className="flex h-full items-center justify-center text-gray-700">No Image</div>
        )}

        {/* 2. OVERLAY LAYER (Gradient Gelap) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        {/* 3. CONTENT LAYER */}
        <div className="absolute bottom-0 left-0 w-full p-6">
          <motion.p 
            className="mb-1 text-xs font-medium tracking-widest text-yellow-500 uppercase"
            variants={{
              rest: { y: 10, opacity: 0 },
              hover: { y: 0, opacity: 1 }
            }}
            transition={{ duration: 0.3 }}
          >
            {data.category}
          </motion.p>
          
          <h3 className="text-2xl font-bold text-white leading-tight">
            {data.title}
          </h3>
          
          <motion.div 
            className="mt-4 flex items-center text-sm text-white font-semibold"
            variants={{
              rest: { x: -10, opacity: 0 },
              hover: { x: 0, opacity: 1 }
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            See Case Study 
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}