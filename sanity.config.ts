// sanity.config.ts
import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schema} from './schemaTypes' // <- point to your real index.ts

const enableVision = process.env.SANITY_STUDIO_ENABLE_VISION === 'true'

export default defineConfig({
  name: 'default',
  title: 'Sanity Studio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,   // e.g. 'y1d9gxkm'
  dataset: process.env.SANITY_STUDIO_DATASET!,        // e.g. 'production'
  basePath: '/',                                      // keep root on Pages
  plugins: [
    ...(enableVision ? [visionTool()] : []),
  ],
  schema: schema,
})
