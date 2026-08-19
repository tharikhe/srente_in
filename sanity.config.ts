'use client'

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'

const rawProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const isValidProjectId = /^[a-z0-9-]+$/i.test(rawProjectId) && !rawProjectId.includes('your_project_id')
const projectId = isValidProjectId ? rawProjectId : 'placeholder-project-id'

export default defineConfig({
  name: 'serente-electronics',
  title: 'Serente Electronics CMS',

  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  basePath: '/studio',
})
