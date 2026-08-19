/**
 * Sanity Data Migration Script
 * 
 * This script migrates existing hardcoded data from:
 * - data/blog.ts (blog posts)
 * - data/manufacturers.ts (manufacturers)
 * - EventsClient.tsx (events)
 * 
 * Into your Sanity dataset.
 * 
 * Usage:
 *   1. Set your environment variables in .env.local
 *   2. Run: npx tsx scripts/seed-sanity.ts
 * 
 * Prerequisites:
 *   - NEXT_PUBLIC_SANITY_PROJECT_ID must be set
 *   - SANITY_API_TOKEN must be a write-level token from Sanity Dashboard > API > Tokens
 */

import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import * as path from 'path'
import * as fs from 'fs'

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error('❌ Missing required environment variables:')
  if (!projectId) console.error('   - NEXT_PUBLIC_SANITY_PROJECT_ID')
  if (!token) console.error('   - SANITY_API_TOKEN')
  console.error('\nPlease set them in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// ── Blog Posts ────────────────────────────────────────────────────────────────

const blogPosts = [
  {
    _type: 'blogPost',
    title: 'The Future of Electronic Components',
    slug: { _type: 'slug', current: 'future-of-electronic-components' },
    excerpt: 'Discover the latest trends and innovations shaping the future of industrial electronic components and manufacturing.',
    content: [
      {
        _type: 'block',
        _key: 'b1a',
        style: 'h2',
        children: [{ _type: 'span', _key: 's1a', text: 'Embracing the Future' }],
      },
      {
        _type: 'block',
        _key: 'b1b',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1b', text: 'The electronics manufacturing industry is undergoing a massive transformation. With the rise of IoT, AI, and smart automation, the demand for highly reliable and efficient electronic components has never been greater.' }],
      },
      {
        _type: 'block',
        _key: 'b1c',
        style: 'normal',
        children: [{ _type: 'span', _key: 's1c', text: 'In this post, we explore how next-generation semiconductors and advanced materials are paving the way for smaller, faster, and more energy-efficient devices.' }],
      },
      {
        _type: 'block',
        _key: 'b1d',
        style: 'h3',
        children: [{ _type: 'span', _key: 's1d', text: 'Key Trends:' }],
      },
      {
        _type: 'block',
        _key: 'b1e',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', _key: 's1e', text: 'Miniaturization of passive components' }],
      },
      {
        _type: 'block',
        _key: 'b1f',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', _key: 's1f', text: 'Increased demand for high-temperature and high-voltage tolerances' }],
      },
      {
        _type: 'block',
        _key: 'b1g',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', _key: 's1g', text: 'Sustainable manufacturing processes' }],
      },
    ],
    date: '2026-08-10',
    author: 'Serente Engineering Team',
    category: 'Industry Trends',
  },
  {
    _type: 'blogPost',
    title: 'Understanding Supply Chain Resilience',
    slug: { _type: 'slug', current: 'understanding-supply-chain-resilience' },
    excerpt: 'How global component distributors are navigating shortages and building robust supply chains for the future.',
    content: [
      {
        _type: 'block',
        _key: 'b2a',
        style: 'h2',
        children: [{ _type: 'span', _key: 's2a', text: 'Building a Robust Supply Chain' }],
      },
      {
        _type: 'block',
        _key: 'b2b',
        style: 'normal',
        children: [{ _type: 'span', _key: 's2b', text: 'Global supply chain disruptions have taught the electronics industry a valuable lesson about resilience and strategic sourcing.' }],
      },
      {
        _type: 'block',
        _key: 'b2c',
        style: 'normal',
        children: [{ _type: 'span', _key: 's2c', text: 'At Serente Electronics, we are leveraging our global network to ensure that our clients have access to critical components even during market shortages.' }],
      },
      {
        _type: 'block',
        _key: 'b2d',
        style: 'h3',
        children: [{ _type: 'span', _key: 's2d', text: 'Our Strategy:' }],
      },
      {
        _type: 'block',
        _key: 'b2e',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', _key: 's2e', text: 'Diversified global sourcing' }],
      },
      {
        _type: 'block',
        _key: 'b2f',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', _key: 's2f', text: 'Predictive inventory management' }],
      },
      {
        _type: 'block',
        _key: 'b2g',
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: [{ _type: 'span', _key: 's2g', text: 'Strong manufacturer partnerships' }],
      },
    ],
    date: '2026-07-22',
    author: 'Serente Logistics',
    category: 'Supply Chain',
  },
  {
    _type: 'blogPost',
    title: 'Top 5 Connectors for Aerospace Applications',
    slug: { _type: 'slug', current: 'top-5-connectors-for-aerospace' },
    excerpt: 'A deep dive into the most reliable and high-performance connectors used in the aerospace and defense sectors.',
    content: [
      {
        _type: 'block',
        _key: 'b3a',
        style: 'h2',
        children: [{ _type: 'span', _key: 's3a', text: 'Reliability Where It Matters Most' }],
      },
      {
        _type: 'block',
        _key: 'b3b',
        style: 'normal',
        children: [{ _type: 'span', _key: 's3b', text: 'Aerospace applications demand the highest level of reliability. Connectors must withstand extreme temperatures, vibrations, and pressure changes.' }],
      },
      {
        _type: 'block',
        _key: 'b3c',
        style: 'normal',
        children: [{ _type: 'span', _key: 's3c', text: 'We review the top 5 connectors that meet strict MIL-SPEC requirements and provide unmatched durability in the skies.' }],
      },
      {
        _type: 'block',
        _key: 'b3d',
        style: 'normal',
        children: [{ _type: 'span', _key: 's3d', text: 'Whether you need circular connectors or high-speed data transmission interfaces, selecting the right component is critical for mission success.' }],
      },
    ],
    date: '2026-06-05',
    author: 'Serente Electronics',
    category: 'Product Spotlight',
  },
]

// ── Manufacturers ─────────────────────────────────────────────────────────────

const manufacturers = [
  { name: 'Firstohm', slug: 'firstohm', description: 'Specialized Resistors', longDescription: 'Firstohm is a leading manufacturer of specialized resistors, known for their high quality and reliability. They offer a wide range of resistor solutions for various applications including automotive, industrial, and consumer electronics.', country: 'Taiwan' },
  { name: 'OCETA', slug: 'oceta', description: 'Connector Solutions', longDescription: 'OCETA provides high-quality connector solutions for a variety of industries. Their products are designed to ensure secure and reliable connections for all your electronic needs.', country: 'Taiwan' },
  { name: 'GL Fiber', slug: 'gl-fiber', description: 'Optical Components', longDescription: 'GL Fiber specializes in optical components, delivering high-performance fiber optic solutions. Their products are essential for modern telecommunications and data transmission systems.', country: 'China' },
  { name: 'ViTEK', slug: 'vitek', description: 'LCD & Displays', longDescription: 'ViTEK is a premier manufacturer of LCDs and display technologies. They provide innovative display solutions that offer superior brightness, contrast, and energy efficiency.', country: 'Taiwan' },
  { name: 'SONYTEK', slug: 'sonytek', description: 'Semiconductors', longDescription: 'SONYTEK is a trusted name in semiconductors, providing essential components for a vast array of electronic devices. Their commitment to quality ensures the performance of your circuits.', country: 'Japan' },
  { name: 'Kingtronics', slug: 'kingtronics', description: 'Potentiometers & Capacitors', longDescription: 'Kingtronics specializes in potentiometers and capacitors, offering a broad selection of components to meet precise electronic specifications. They are dedicated to delivering stable and durable parts.', country: 'Hong Kong' },
  { name: 'Palm Technology', slug: 'palm-technology', description: 'LCD Modules', longDescription: 'Palm Technology is an expert in LCD modules, providing custom and standard display solutions. Their modules are used in a wide range of industrial and consumer applications.', country: 'Taiwan' },
  { name: 'Taimates', slug: 'taimates', description: 'Battery Holders', longDescription: 'Taimates offers a comprehensive range of battery holders and related accessories. Their products are designed for durability and ease of use in various battery-powered devices.', country: 'Taiwan' },
  { name: 'Isocom', slug: 'isocom', description: 'Optocouplers', longDescription: 'Isocom Components is a leading manufacturer of high-performance infrared optoelectronic devices. They specialize in optocouplers and optoswitches for demanding industrial applications.', country: 'UK' },
  { name: 'Greenconn', slug: 'greenconn', description: 'Connector Solutions', longDescription: 'Greenconn is a leading provider of connector solutions, known for their reliability and innovative designs.', country: 'International' },
  { name: 'JB Capacitors', slug: 'jb-capacitors', description: 'Capacitors', longDescription: 'JB Capacitors manufactures high-quality capacitors for various electronic applications.', country: 'China' },
  { name: 'Disen', slug: 'disen', description: 'Display Modules', longDescription: 'Disen specializes in LCD display modules and touch screen solutions.', country: 'China' },
  { name: 'Hongda', slug: 'hongda', description: 'Electronic Components', longDescription: 'Hongda is a professional distributor of electronic components.', country: 'China' },
  { name: 'Microtech', slug: 'microtech', description: 'Technology Solutions', longDescription: 'Microtech Technology Company Limited provides various technology solutions and components.', country: 'Hong Kong' },
  { name: 'Romtronic', slug: 'romtronic', description: 'Cable Assemblies', longDescription: 'Romtronic specializes in cable assemblies and wire harnesses.', country: 'China' },
  { name: 'Smico', slug: 'smico', description: 'Connectors', longDescription: 'Smico is a manufacturer of heavy-duty connectors and terminals.', country: 'China' },
  { name: 'Wipin', slug: 'wipin', description: 'Industrial Tools', longDescription: 'Wipin manufactures hydraulic tools and equipment for industrial use.', country: 'China' },
  { name: 'Yeebo', slug: 'yeebo', description: 'Display Solutions', longDescription: 'Yeebo Display Ltd specializes in high-quality monochrome LCD and LCM displays.', country: 'Hong Kong' },
  { name: 'YM Tech', slug: 'ym-tech', description: 'Relays', longDescription: 'YM Tech is a leading manufacturer of DC high voltage relays.', country: 'South Korea' },
]

// ── Events ────────────────────────────────────────────────────────────────────

const events = [
  {
    title: 'Electronica South Asia 2026',
    date: 'September 16-18, 2026',
    time: '09:00 AM - 06:00 PM',
    location: 'BEIC, Bengaluru, India',
    description: 'World\'s Leading Trade Fair for Electronics — Empowering Innovation. Come discover our newest innovations, solutions, and capabilities. Visit us at Booth H5.C125 to explore cutting-edge electronics and build the future of electronics together.',
    type: 'Trade Fair',
    attendees: '10000+',
  },
  {
    title: 'Global Electronics Sourcing Expo 2026',
    date: 'March 15-18, 2026',
    time: '09:00 AM - 06:00 PM',
    location: 'Hong Kong Convention Center',
    description: 'Join over 5,000 industry leaders for the premier electronics sourcing event in Asia. Discover the latest in semiconductors, passives, and supply chain innovation.',
    type: 'Expo',
    attendees: '5000+',
  },
  {
    title: 'Future of EV Components Summit',
    date: 'April 22, 2026',
    time: '10:00 AM - 04:00 PM',
    location: 'Shanghai Grand Hyatt, China',
    description: 'An exclusive deep dive into the evolving landscape of Electric Vehicle electronics. Learn about high-voltage connectors, power management ICs, and battery tech.',
    type: 'Summit',
    attendees: '800+',
  },
  {
    title: 'Serente Tech Workshop: Supply Chain Resilience',
    date: 'May 10, 2026',
    time: '02:00 PM - 05:00 PM',
    location: 'Webinar (Online)',
    description: 'Our quarterly workshop focusing on strategies to mitigate shortage risks. Expert panel discussions on inventory forecasting and alternative part sourcing.',
    type: 'Webinar',
    attendees: '1200+',
  },
  {
    title: 'Shenzhen Electronics Fair',
    date: 'June 05-08, 2026',
    time: '09:00 AM - 05:00 PM',
    location: 'Shenzhen Exhibition Center',
    description: 'Explore the heart of the electronics world. Meet our team at Booth 4A-12 to discuss your component needs and see our latest stock arrivals.',
    type: 'Fair',
    attendees: '10000+',
  },
]

// ── Migration ─────────────────────────────────────────────────────────────────

async function migrate() {
  console.log('🚀 Starting Sanity data migration...\n')
  console.log(`   Project: ${projectId}`)
  console.log(`   Dataset: ${dataset}\n`)

  // Migrate blog posts (without images — those need to be uploaded separately via Studio)
  console.log('📝 Migrating blog posts...')
  for (const post of blogPosts) {
    try {
      const result = await client.create(post)
      console.log(`   ✅ Created: "${post.title}" (${result._id})`)
    } catch (err: any) {
      console.error(`   ❌ Failed: "${post.title}" — ${err.message}`)
    }
  }

  // Migrate manufacturers (without logo images)
  console.log('\n🏭 Migrating manufacturers...')
  for (const mfr of manufacturers) {
    try {
      const doc = {
        _type: 'manufacturer',
        name: mfr.name,
        slug: { _type: 'slug', current: mfr.slug },
        description: mfr.description,
        longDescription: mfr.longDescription,
        country: mfr.country,
      }
      const result = await client.create(doc)
      console.log(`   ✅ Created: "${mfr.name}" (${result._id})`)
    } catch (err: any) {
      console.error(`   ❌ Failed: "${mfr.name}" — ${err.message}`)
    }
  }

  // Migrate events (without images)
  console.log('\n📅 Migrating events...')
  for (const evt of events) {
    try {
      const doc = {
        _type: 'event',
        ...evt,
      }
      const result = await client.create(doc)
      console.log(`   ✅ Created: "${evt.title}" (${result._id})`)
    } catch (err: any) {
      console.error(`   ❌ Failed: "${evt.title}" — ${err.message}`)
    }
  }

  console.log('\n✨ Migration complete!')
  console.log('\n📌 IMPORTANT: Images were NOT migrated automatically.')
  console.log('   Please upload images manually through the Sanity Studio at /studio.')
  console.log('   - Blog posts: Upload cover images for each post')
  console.log('   - Manufacturers: Upload logo images for each manufacturer')
  console.log('   - Events: Upload banner images for each event')
}

migrate().catch(console.error)
