import {createClient} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Check if Sanity is properly configured
export const isSanityConfigured = Boolean(
  projectId &&
    !projectId.includes('your_project_id') &&
    /^[a-z0-9-]+$/i.test(projectId)
)

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null

/**
 * Fetches data from Sanity. Returns the fallback value if Sanity is not configured.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sanityFetch<T>(query: string, params?: any, fallback?: T): Promise<T> {
  if (!client) {
    return (fallback ?? []) as T
  }
  try {
    return await client.fetch<T>(query, params || {})
  } catch (err) {
    console.error('[Sanity] Fetch error:', err)
    return (fallback ?? []) as T
  }
}
