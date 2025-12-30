import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// --- 1. DEFINISI TIPE DATA (STRICT) ---

interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  [key: string]: unknown;
}

interface Stat {
  _key: string;
  label: string;
  value: string;
}

interface ProjectDetail {
  _id: string;
  title: string;
  clientName?: string;
  category: string;
  mainImage: SanityImage;
  stats?: Stat[];
  challenge?: string;
  solution?: string;
  impact?: string;
  gallery?: SanityImage[];
  slug: { current: string };
}

interface SlugQuery {
  slug: { current: string };
}

// --- 2. DATA FETCHING ---

async function getProject(slug: string): Promise<ProjectDetail | null> {
  const query = `
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      clientName,
      category,
      mainImage,
      stats,
      challenge,
      solution,
      impact,
      gallery,
      slug
    }
  `;
  // Parameter { slug } ini akan dikirim ke $slug di query
  return client.fetch<ProjectDetail>(query, { slug });
}

// --- 3. GENERATE STATIC PARAMS ---

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const query = `*[_type == "project"]{ "slug": slug }`;
  const projects = await client.fetch<SlugQuery[]>(query);

  return projects.map((project) => ({
    slug: project.slug.current,
  }));
}

// --- 4. KOMPONEN UTAMA ---

// PERBAIKAN DI SINI: params adalah Promise di Next.js 15+
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  // WAJIB: Await params sebelum menggunakannya
  const resolvedParams = await params;

  // Sekarang kita kirim string slug yang sudah di-resolve
  const project = await getProject(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pb-24">
      {/* A. HERO HEADER */}
      <div className="relative h-[70vh] w-full">
        {project.mainImage && (
          <Image
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            fill
            className="object-cover opacity-60"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto">
          {project.clientName && (
            <p className="text-yellow-500 tracking-widest uppercase text-sm font-bold mb-2">
              {project.clientName} — {project.category}
            </p>
          )}
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-none">
            {project.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
        {/* B. THE STATS BAR */}
        {project.stats && project.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-gray-800 py-8 mb-16">
            {project.stats.map((stat) => (
              <div key={stat._key}>
                <p className="text-4xl md:text-5xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm uppercase tracking-wide mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* C. THE NARRATIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          {/* Kolom Kiri */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-white mb-4">
                Project Overview
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Kami mendekati proyek ini bukan sebagai event organizer, tetapi
                sebagai partner strategis untuk mencapai tujuan bisnis.
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="text-yellow-500 hover:text-white transition text-sm font-bold"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h4 className="text-xl font-bold text-white mb-3">
                The Challenge
              </h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.challenge || "Deskripsi tantangan belum ditambahkan."}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-3">
                The Solution
              </h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.solution || "Deskripsi solusi belum ditambahkan."}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-3">The Impact</h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.impact || "Deskripsi dampak belum ditambahkan."}
              </p>
            </div>
          </div>
        </div>

        {/* D. IMAGE GALLERY */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">
              Visual Evidence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((image: SanityImage, i: number) => (
                <div
                  key={image.asset?._ref || i}
                  className={`relative h-[400px] w-full rounded-xl overflow-hidden ${i % 3 === 0 ? "md:col-span-2" : ""}`}
                >
                  <Image
                    src={urlFor(image).url()}
                    alt={`Gallery image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
