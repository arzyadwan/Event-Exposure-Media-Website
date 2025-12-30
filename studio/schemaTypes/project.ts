// studio/schemaTypes/project.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Portfolio Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature on Homepage?',
      type: 'boolean',
      initialValue: false,
      description: 'Aktifkan ini untuk 3 proyek terbaik yang akan muncul di Hero/Home.',
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Brand Activation', value: 'activation' },
          { title: 'Corporate Gathering', value: 'gathering' },
          { title: 'Product Launch', value: 'launch' },
          { title: 'Conference / MICE', value: 'mice' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image (Cover)',
      type: 'image',
      options: { hotspot: true }, // Penting agar bisa crop titik fokus
      validation: (rule) => rule.required(),
    }),
    // --- SECTION: STRATEGI OPSI B (IMPACT & ROI) ---
    defineField({
      name: 'stats',
      title: 'Key Metrics (Angka Keberhasilan)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', type: 'string', title: 'Value (e.g. 15,000+)' },
            { name: 'label', type: 'string', title: 'Label (e.g. Visitors)' },
          ],
        },
      ],
      description: 'Masukkan 2-3 angka pamer. Tanpa angka, proyek terlihat lemah.',
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge (Masalah)',
      type: 'text',
      rows: 3,
      description: 'Apa ketakutan/masalah klien sebelum event?',
    }),
    defineField({
      name: 'solution',
      title: 'The Solution (Strategi)',
      type: 'text',
      rows: 3,
      description: 'Apa ide gila/solusi teknis kita?',
    }),
    defineField({
      name: 'impact',
      title: 'The Impact (Hasil)',
      type: 'text',
      rows: 3,
      description: 'Bagaimana reaksi pasar/karyawan setelah event?',
    }),
    // ------------------------------------------------
    defineField({
      name: 'gallery',
      title: 'Event Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
})