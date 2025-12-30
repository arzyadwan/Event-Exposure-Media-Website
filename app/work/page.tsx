import { client } from '@/lib/sanity'
import WorkFeed from '@/components/WorkFeed'

// Strict Type Definition
interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  imageUrl: string;
  category: string;
}

// Fetch Semua Proyek
async function getAllProjects() {
  const query = `
    *[_type == "project"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      category,
      "imageUrl": mainImage.asset->url
    }
  `
  return client.fetch<Project[]>(query)
}

export const metadata = {
  title: 'Our Work | VANGUARD',
  description: 'Portofolio event korporat dan aktivasi brand.',
}

export default async function WorkPage() {
  const projects = await getAllProjects()

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16 border-b border-gray-800 pb-10">
          <p className="text-yellow-500 font-bold uppercase tracking-widest mb-4">Full Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-none">
            The Archive.
          </h1>
        </div>

        {/* FEED COMPONENT (Client Side Interactivity) */}
        <WorkFeed projects={projects} />

      </div>
    </main>
  )
}