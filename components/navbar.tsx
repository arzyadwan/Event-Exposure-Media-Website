'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const navLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' }, // Kita belum buat page ini, tapi link-nya siapkan saja
  { name: 'About', href: '/about' },       // Kita belum buat page ini juga
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/50 border-b border-white/10"
    >
      {/* 1. LOGO */}
      <Link href="/" className="text-xl font-extrabold tracking-tighter text-white uppercase z-50">
        VANGUARD<span className="text-yellow-500">.</span>
      </Link>

      {/* 2. DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className={clsx(
              "text-sm font-medium transition-colors hover:text-yellow-500",
              pathname === link.href ? "text-white" : "text-gray-400"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* 3. CTA BUTTON */}
      <div className="flex items-center">
        <Link 
          href="/contact"
          className="rounded-full bg-white px-5 py-2 text-sm font-bold text-black transition hover:bg-yellow-500"
        >
          Start Project
        </Link>
      </div>
    </motion.nav>
  )
}