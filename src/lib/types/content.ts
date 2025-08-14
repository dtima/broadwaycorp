export type DivisionId = 'farmhouse' | 'enterprise' | 'intelligence' | 'resorts';

export interface FeatureTile {
  id: DivisionId;
  title: string;
  href: string;
  description?: string;
  imageUrl?: string;
}

export interface EventItem {
  id: string;
  title: string;
  startAt: string; // ISO string for simplicity
  location?: string;
  href: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  publishedAt: string; // ISO string
  href: string;
}

export interface LatestContent {
  events: EventItem[];
  blogPosts: BlogPostItem[];
}
