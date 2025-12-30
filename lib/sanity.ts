// lib/sanity.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
})

const builder = imageUrlBuilder(client)

interface SanityImageSource {
  _type?: string;
  asset?: {
    _ref: string;
    _type?: string;
  };
  [key: string]: unknown; 
}

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}