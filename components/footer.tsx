import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 pt-20 pb-10 px-6 md:px-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full">
        
        {/* CTA SECTION */}
        <div className="mb-20">
          <p className="text-yellow-500 font-bold uppercase tracking-widest mb-4">What&apos;s Next?</p>
          <h2 className="text-5xl md:text-8xl font-bold text-white uppercase leading-none mb-8">
            Let&apos;s Create <br />
            <span className="text-gray-800 hover:text-white transition-colors duration-500 cursor-pointer">
              Impact.
            </span>
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center text-xl md:text-2xl text-white border-b-2 border-yellow-500 pb-1 hover:text-yellow-500 transition-all"
          >
            Start a Conversation →
          </Link>
        </div>

        {/* BOTTOM LINKS */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-gray-900 pt-10 text-gray-500 text-sm">
          
          <div className="mb-4 md:mb-0">
            <p className="font-bold text-white mb-2">JAKARTA HQ</p>
            <p>Sudirman Central Business District</p>
            <p>Jakarta Selatan, 12190</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">WhatsApp</a>
          </div>

          <div className="mt-6 md:mt-0">
            <p>&copy; {currentYear} Vanguard EO. All Rights Reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  )
}