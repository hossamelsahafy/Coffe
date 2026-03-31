import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  access: { read: () => true },

  fields: [
    // ===== Basic Info =====
    { name: 'title', type: 'text', required: true },
    { name: 'titleAr', type: 'text' },
    { name: 'subtitle', type: 'text' },
    { name: 'subtitleAr', type: 'text' },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      hasMany: false,
    },
    { name: 'type', type: 'text' },
    { name: 'typeAr', type: 'text' },

    // ===== Options Type =====
    {
      name: 'optionsType',
      type: 'radio',
      required: true,
      options: [
        { label: 'Choices (Coffee options)', value: 'choices' },
        { label: 'Colors', value: 'colors' },
      ],
    },

    // ===== Choices =====
    {
      name: 'choices',
      type: 'array',
      admin: {
        condition: (data) => data.optionsType === 'choices',
      },
      fields: [
        {
          name: 'options',
          type: 'array',
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'valueAr', type: 'text', required: true },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            { name: 'priceAfter', type: 'number', required: true },
            { name: 'priceBefore', type: 'number', required: true },
          ],
        },
      ],
    },

    // ===== Colors =====
    {
      name: 'colors',
      type: 'array',
      admin: {
        condition: (data) => data.optionsType === 'colors',
      },
      fields: [
        { name: 'en', type: 'text', required: true },
        { name: 'ar', type: 'text', required: true },
        { name: 'priceAfter', type: 'number', required: true },
        { name: 'priceBefore', type: 'number', required: true },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}

export default Products
