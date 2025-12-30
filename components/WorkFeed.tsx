'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'

// Definisi Tipe yang sama dengan ProjectCard
interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  imageUrl: string;
  category: string;
}

interface WorkFeedProps {
  projects: Project[]
}

// Daftar kategori (sesuaikan dengan value di Sanity schema project.ts)
const categories = [
  { label: 'All', value: 'all' },
  { label: 'Brand Activation', value: 'activation' },
  { label: 'Corporate Gathering', value: 'gathering' },
  { label: 'Product Launch', value: 'launch' },
  { label: 'MICE / Conference', value: 'mice' },
]

export default function WorkFeed({ projects }: WorkFeedProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  // Logika Filter
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <div>
      {/* 1. FILTER BUTTONS */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveFilter(cat.value)}
            className={`
              px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all
              ${activeFilter === cat.value 
                ? 'bg-yellow-500 text-black' 
                : 'border border-gray-800 text-gray-400 hover:border-white hover:text-white'}
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 2. PROJECT GRID WITH ANIMATION */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard data={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Pesan jika hasil filter kosong */}
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-gray-500">
          <p>Belum ada proyek di kategori ini.</p>
        </div>
      )}
    </div>
  )
}