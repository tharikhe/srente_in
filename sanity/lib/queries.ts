import {groq} from 'next-sanity'

// ── Blog Posts ──────────────────────────────────────────────────────────────────

export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(date desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    date,
    author,
    image,
    category
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    date,
    author,
    image,
    category
  }
`

export const blogPostSlugsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)] {
    "slug": slug.current
  }
`

// ── Manufacturers ───────────────────────────────────────────────────────────────

export const allManufacturersQuery = groq`
  *[_type == "manufacturer"] | order(name asc) {
    _id,
    name,
    slug,
    logo,
    description,
    longDescription,
    country,
    website
  }
`

export const manufacturerBySlugQuery = groq`
  *[_type == "manufacturer" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    logo,
    description,
    longDescription,
    country,
    website
  }
`

// ── Events ──────────────────────────────────────────────────────────────────────

export const allEventsQuery = groq`
  *[_type == "event"] | order(date desc) {
    _id,
    title,
    date,
    time,
    location,
    description,
    image,
    type,
    attendees
  }
`
