import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20">
      
      {/* 1. MANIFESTO */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <p className="text-yellow-500 font-bold uppercase tracking-widest mb-6">Who We Are</p>
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight">
          Kami menolak event yang membosankan. <br />
          <span className="text-gray-500">Kami adalah arsitek pengalaman.</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              Berdiri sejak 2018, Vanguard EO lahir dari rasa frustrasi melihat event korporat yang kaku, repetitif, dan tidak berdampak. Kami percaya bahwa setiap gathering, peluncuran produk, atau konferensi adalah kesempatan emas untuk menanamkan pesan brand ke dalam benak audiens.
            </p>
            <p>
              Kami bukan sekadar penyedia logistik. Kami adalah mitra strategis Anda. Kami menggabungkan kreativitas liar dengan disiplin militer dalam eksekusi.
            </p>
          </div>
          
          {/* STATS SEDERHANA */}
          <div className="grid grid-cols-2 gap-8">
            <div className="border-l border-white/20 pl-6">
              <h3 className="text-5xl font-bold text-yellow-500">50+</h3>
              <p className="text-sm uppercase tracking-widest mt-2">Corporate Clients</p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <h3 className="text-5xl font-bold text-yellow-500">200+</h3>
              <p className="text-sm uppercase tracking-widest mt-2">Events Executed</p>
            </div>
            <div className="border-l border-white/20 pl-6">
              <h3 className="text-5xl font-bold text-yellow-500">0</h3>
              <p className="text-sm uppercase tracking-widest mt-2">Missed Deadlines</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEAM / FOUNDER (Placeholder) */}
      <section className="bg-neutral-900 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold uppercase mb-12">Leadership</h2>
          
          {/* Grid Tim - Ganti src dengan foto asli nanti */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group">
                <div className="relative h-96 w-full bg-gray-800 mb-6 grayscale group-hover:grayscale-0 transition duration-500">
                   {/* Placeholder Image */}
                   <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                     [Foto Tim {i}]
                   </div>
                </div>
                <h3 className="text-xl font-bold text-white">Nama Leader {i}</h3>
                <p className="text-yellow-500 text-sm uppercase">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}