'use client'

import { motion } from 'framer-motion'

// Karena kita belum upload logo klien nyata, kita pakai placeholder teks dulu.
// Nanti Anda bisa ganti ini dengan <Image> dari Sanity.
const clients = [
  "BANK MANDIRI", "TELKOMSEL", "ASTRA", "TOKOPEDIA", "GOJEK", 
  "BCA", "UNILEVER", "PERTAMINA", "SAMSUNG", "NETFLIX"
]

export default function ClientMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-10 border-y border-gray-900">
      {/* Gradient Fade di Kiri & Kanan agar terlihat menyatu */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black to-transparent" />

      <div className="flex">
        {/* Kita duplikasi array klien 2x untuk menciptakan efek infinite loop tanpa putus */}
        <motion.div
          className="flex flex-nowrap gap-16 whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 // Atur kecepatan di sini (makin kecil makin ngebut)
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <span 
              key={index} 
              className="text-2xl font-bold text-gray-600 uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-white transition-opacity cursor-default"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}