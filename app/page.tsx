import HeroSection from '@/components/HeroSection'
import ProjectCard from '@/components/ProjectCard'
import ClientMarquee from '@/components/ClientMarquee' // Komponen Baru
import ServicesSection from '@/components/ServicesSection' // Komponen Baru
import { client } from '@/lib/sanity'
import Link from 'next/link'

// --- TYPE DEFINITIONS (STRICT) ---
interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  imageUrl: string;
  category: string;
}

interface Service {
  _id: string;
  title: string;
  description: string;
}

// --- DATA FETCHING ---
async function getHomepageData() {
  // Kita fetch Project dan Service sekaligus dengan Promise.all agar cepat
  const projectsQuery = `
    *[_type == "project" && isFeatured == true] | order(_createdAt desc) [0...3] {
      _id,
      title,
      slug,
      category,
      "imageUrl": mainImage.asset->url
    }
  `
  
  const servicesQuery = `
    *[_type == "service"] | order(title asc) {
      _id,
      title,
      description
    }
  `

  const [projects, services] = await Promise.all([
    client.fetch<Project[]>(projectsQuery),
    client.fetch<Service[]>(servicesQuery)
  ])

  return { projects, services }
}

export default async function Home() {
  const { projects, services } = await getHomepageData()

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. TRUST SIGNAL (MARQUEE) */}
      <ClientMarquee />

      {/* 3. SELECTED WORK */}
      <section className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Selected Work
            </h2>
            <p className="mt-4 text-gray-400 max-w-md">
              Kurasi proyek terbaik di mana strategi bertemu eksekusi.
            </p>
          </div>
          <Link 
            href="/work" 
            className="hidden md:inline-flex items-center border-b border-white pb-1 hover:text-yellow-500 hover:border-yellow-500 transition-colors"
          >
            View All Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project._id} data={project} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">
              Belum ada Featured Project. Masuk ke Sanity Studio dan set &quot;Featured&quot; ke true.
            </p>
          )}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/work" className="inline-block border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            View All Projects
          </Link>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <ServicesSection services={services} />

    </main>
  )
}