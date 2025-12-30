import { PortableText } from '@portabletext/react'

// Strict Type Definition
interface Service {
  _id: string;
  title: string;
  description: string; // Jika di Sanity pakai 'text', ini string. Jika 'block', butuh PortableText.
}

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-gray-800 pb-8">
          <p className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-2">Our Expertise</p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase">
            Beyond Logistics. <br />
            We Engineer Experience.
          </h2>
        </div>

        {/* Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={service._id} className="group">
              {/* Numbering Estetik */}
              <span className="block text-6xl font-bold text-gray-800 mb-6 group-hover:text-yellow-500 transition-colors duration-300">
                0{index + 1}
              </span>
              
              <h3 className="text-2xl font-bold mb-4 uppercase group-hover:underline decoration-yellow-500 underline-offset-4">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}