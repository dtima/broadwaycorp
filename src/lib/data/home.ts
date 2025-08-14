import type { FeatureTile, LatestContent } from '@/lib/types/content';
import events from '@/content/events.json';
import blog from '@/content/blog.json';
import divisions from '@/content/divisions.json';

// Marketing content should NOT use Firestore. Keep static or CMS-driven.
export async function fetchHomeFeatureTiles(): Promise<FeatureTile[]> {
  return divisions as FeatureTile[];
}

export async function fetchLatest(): Promise<LatestContent> {
  return {
    events: events.slice(0, 5),
    blogPosts: blog.slice(0, 5),
  };
}
