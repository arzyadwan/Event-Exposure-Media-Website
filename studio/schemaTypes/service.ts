// studio/schemaTypes/service.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Icon (SVG/Image)',
      type: 'image',
    }),
  ],
})