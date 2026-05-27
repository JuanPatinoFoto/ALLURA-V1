import { client } from '@/sanity/lib/client'
import { trackingScriptsQuery } from '@/sanity/lib/queries'
import type { TrackingScripts } from '@/sanity/lib/queries'

const revalidate = process.env.NODE_ENV === 'development' ? 0 : 3600

export async function getTrackingScripts(): Promise<TrackingScripts | null> {
  return client.fetch<TrackingScripts>(
    trackingScriptsQuery,
    {},
    { next: { revalidate } }
  )
}
