# Broadway Corporation - Page Specifications

**Version:** 2.0.0  
**Date:** October 30, 2025

---

## Public Pages

### Home (`/`)

**Route:** `/` → redirects to `/en`  
**Route (localized):** `/[locale]` (`/en`, `/fr`)

**Purpose:** Introduce Broadway Corporation, route to divisions, surface latest content

**Layout:**
```tsx
<main>
  <Hero slides={[farmhouse, enterprise, intelligence, resorts]} />
  <FeatureTiles divisions={4} />
  <LatestContent events={3} blogPosts={3} />
  <NewsletterCTA />
</main>
```

**Data Sources:**
```typescript
// Server Component
async function HomePage() {
  const supabase = createClient();
  
  const { data: events } = await supabase
    .from('events')
    .select('*')
    .eq('status', 'published')
    .order('start_at', { ascending: true })
    .limit(3);
    
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .limit(3);
    
  return <HomePage events={events} posts={posts} />;
}
```

**SEO:**
- Title: `"Broadway Corporation — Farmhouse, Enterprise, Intelligence, Resorts"`
- Meta description: `"Transform Africa's potential through sustainable agriculture, laboratory solutions, IT services, and eco-tourism."`
- OG image: `/images/og-home.jpg`

---

### Farmhouse Division (`/farmhouse`)

**Routes:**
- `/[locale]/farmhouse` - Overview
- `/[locale]/farmhouse/scorpion` - Scorpion Farm
- `/[locale]/farmhouse/bsf` - BSF Farm  
- `/[locale]/farmhouse/fish` - Fish Farm
- `/[locale]/farmhouse/galleries` - Photo galleries

**Data:**
```typescript
const { data: galleries } = await supabase
  .from('galleries')
  .select('*, gallery_images(media_id)')
  .eq('division', 'farmhouse');
```

---

### Enterprise Division (`/enterprise`)

**Routes:**
- `/[locale]/enterprise` - Overview
- `/[locale]/enterprise/catalog` - Product catalog
- `/[locale]/enterprise/catalog/[slug]` - Product detail
- `/[locale]/enterprise/designs` - Laboratory designs
- `/[locale]/enterprise/stem` - STEM programs

**Data (Catalog):**
```typescript
const { data: products } = await supabase
  .from('products')
  .select('*')
  .eq('status', 'published')
  .order('created_at', { ascending: false });
```

---

### Intelligence Division (`/intelligence`)

**Routes:**
- `/[locale]/intelligence` - Overview
- `/[locale]/intelligence/it` - IT Services
- `/[locale]/intelligence/data-center` - Data Center
- `/[locale]/intelligence/security` - Security Consulting
- `/[locale]/intelligence/lms` - LMS Courses
- `/[locale]/intelligence/lms/[slug]` - Course detail

**Data (LMS):**
```typescript
const { data: courses } = await supabase
  .from('courses')
  .select('*')
  .eq('status', 'published')
  .eq('locale', locale);
```

---

### Resorts Division (`/resorts`)

**Routes:**
- `/[locale]/resorts` - Overview
- `/[locale]/resorts/agro-tourism` - Agro-tourism
- `/[locale]/resorts/sanctuary` - Animal Sanctuary
- `/[locale]/resorts/roadhouse` - Roadhouse Menu
- `/[locale]/resorts/hospitality` - Hospitality
- `/[locale]/resorts/games` - Outdoor Games
- `/[locale]/resorts/holidays` - Holiday Packages

**Data (Roadhouse Menu):**
```typescript
const { data: menuItems } = await supabase
  .from('menu_items')
  .select('*, menus(*)')
  .eq('available', true)
  .order('sort_order');
```

---

### Blog (`/blog`)

**Routes:**
- `/[locale]/blog` - Blog listing
- `/[locale]/blog/[slug]` - Article detail

**Data:**
```typescript
// List
const { data: posts } = await supabase
  .from('blog_posts')
  .select('*, profiles(full_name), blog_post_categories(blog_categories(name))')
  .eq('status', 'published')
  .eq('locale', locale)
  .order('published_at', { ascending: false });

// Detail
const { data: post } = await supabase
  .from('blog_posts')
  .select('*, profiles(full_name, avatar_url)')
  .eq('slug', slug)
  .eq('status', 'published')
  .single();
```

---

### Events (`/events`)

**Routes:**
- `/[locale]/events` - Events listing
- `/[locale]/events/[slug]` - Event detail with registration

**Data:**
```typescript
const { data: events } = await supabase
  .from('events')
  .select('*')
  .eq('status', 'published')
  .gte('start_at', new Date().toISOString())
  .order('start_at');
```

**Server Action (Registration):**
```typescript
'use server';
export async function registerForEvent(formData: FormData) {
  const supabase = createClient();
  
  const { error } = await supabase
    .from('event_registrations')
    .insert({
      event_id: formData.get('event_id'),
      name: formData.get('name'),
      email: formData.get('email'),
      guests: parseInt(formData.get('guests') as string),
    });
    
  if (error) throw error;
  revalidatePath('/events/[slug]');
  return { success: true };
}
```

---

### Jobs (`/jobs`)

**Routes:**
- `/[locale]/jobs` - Job listings
- `/[locale]/jobs/[slug]` - Job detail
- `/[locale]/jobs/[slug]/apply` - Application form

**Data:**
```typescript
const { data: jobs } = await supabase
  .from('jobs')
  .select('*')
  .eq('status', 'open')
  .eq('locale', locale);
```

---

### Contact (`/contact`)

**Route:** `/[locale]/contact`

**Server Action:**
```typescript
'use server';
export async function submitContact(formData: FormData) {
  const supabase = createClient();
  
  const { error } = await supabase
    .from('contacts')
    .insert({
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    });
    
  if (error) throw error;
  return { success: true };
}
```

---

## Admin Pages (Protected)

### Dashboard (`/admin`)

**Auth Required:** Yes (admin/editor)

**Layout:**
```tsx
<AdminLayout>
  <DashboardGrid>
    <KPICard title="Total Events" value={events.length} />
    <KPICard title="Blog Posts" value={posts.length} />
    <KPICard title="Subscribers" value={subscribers.length} />
  </DashboardGrid>
  <RecentActivity />
</AdminLayout>
```

---

### Employees (`/admin/employees`)

**CRUD Operations:**
```typescript
// List
const { data } = await supabase.from('employees').select('*');

// Create
'use server';
export async function createEmployee(data: EmployeeInput) {
  const supabase = createClient();
  return supabase.from('employees').insert(data);
}

// Update
export async function updateEmployee(id: string, data: Partial<Employee>) {
  const supabase = createClient();
  return supabase.from('employees').update(data).eq('id', id);
}

// Delete
export async function deleteEmployee(id: string) {
  const supabase = createClient();
  return supabase.from('employees').delete().eq('id', id);
}
```

---

### Events Management (`/admin/events`)

**Features:**
- Calendar view + list view toggle
- Event editor (title, description, date, location, image upload)
- Publish/unpublish toggle
- Registration list per event

---

### Blog Management (`/admin/blog`)

**Features:**
- Posts table (title, status, author, updated_at)
- Markdown/Rich Text Editor
- Media picker for cover images
- Category and tag assignment
- Draft/Published/Archived status

---

### Media Library (`/admin/media`)

**Features:**
- Grid view of all uploaded assets
- Drag-and-drop upload
- Folder organization (via tags)
- Preview modal
- Delete/move operations

**Upload Handler:**
```typescript
'use server';
export async function uploadMedia(file: File) {
  const supabase = createClient();
  const fileName = `${Date.now()}-${file.name}`;
  
  const { data, error } = await supabase.storage
    .from('galleries')
    .upload(fileName, file);
    
  if (error) throw error;
  
  const publicUrl = supabase.storage
    .from('galleries')
    .getPublicUrl(fileName).data.publicUrl;
    
  // Save metadata
  await supabase.from('media').insert({
    file_name: file.name,
    storage_path: fileName,
    public_url: publicUrl,
    mime_type: file.type,
    size_bytes: file.size,
  });
  
  return { url: publicUrl };
}
```

---

## Error Pages

### 404 Not Found

**Route:** `/404`

```tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl text-neutral-600">Page not found</p>
        <Link href="/" className="btn-primary mt-4">
          Go Home
        </Link>
      </div>
    </div>
  );
}
```

### 500 Server Error

**Route:** `/500`

---

**Document Owner:** Frontend Engineer  
**Last Updated:** October 30, 2025
