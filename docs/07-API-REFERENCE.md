# Broadway Corporation - API Reference

**Version:** 2.0.0  
**Backend:** Supabase + Next.js Server Actions  
**Date:** October 30, 2025

---

## Authentication

All API routes and Server Actions check authentication using Supabase Auth.

```typescript
import { createClient } from '@/lib/supabase/server';

export async function requireAuth() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error || !user) {
    throw new Error('Unauthorized');
  }
  
  return user;
}

export async function requireAdmin() {
  const user = await requireAuth();
  const role = user.user_metadata?.role;
  
  if (role !== 'admin') {
    throw new Error('Forbidden');
  }
  
  return user;
}
```

---

## Server Actions

### Employee Management

#### Create Employee
```typescript
// app/admin/employees/actions.ts
'use server';
import { createClient } from '@/lib/supabase/server';
import { employeeSchema } from '@/lib/validations/employees';
import { revalidatePath } from 'next/cache';

export async function createEmployee(formData: FormData) {
  await requireAdmin();
  
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    role: formData.get('role'),
  };
  
  const validated = employeeSchema.parse(data);
  
  const supabase = createClient();
  const { error } = await supabase
    .from('employees')
    .insert(validated);
    
  if (error) throw error;
  
  revalidatePath('/admin/employees');
  return { success: true };
}
```

#### Update Employee
```typescript
'use server';
export async function updateEmployee(id: string, formData: FormData) {
  await requireAdmin();
  
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    role: formData.get('role'),
  };
  
  const validated = employeeSchema.partial().parse(data);
  
  const supabase = createClient();
  const { error } = await supabase
    .from('employees')
    .update(validated)
    .eq('id', id);
    
  if (error) throw error;
  
  revalidatePath('/admin/employees');
  return { success: true };
}
```

#### Delete Employee
```typescript
'use server';
export async function deleteEmployee(id: string) {
  await requireAdmin();
  
  const supabase = createClient();
  const { error } = await supabase
    .from('employees')
    .delete()
    .eq('id', id);
    
  if (error) throw error;
  
  revalidatePath('/admin/employees');
  return { success: true };
}
```

---

### Blog Management

#### Create Blog Post
```typescript
'use server';
export async function createBlogPost(formData: FormData) {
  const user = await requireAuth();
  
  const data = {
    title: formData.get('title'),
    slug: formData.get('slug'),
    content: formData.get('content'),
    excerpt: formData.get('excerpt'),
    cover_image_url: formData.get('cover_image_url'),
    status: formData.get('status'),
    locale: formData.get('locale'),
    author_id: user.id,
  };
  
  const validated = blogPostSchema.parse(data);
  
  const supabase = createClient();
  const { error } = await supabase
    .from('blog_posts')
    .insert(validated);
    
  if (error) throw error;
  
  revalidatePath('/admin/blog');
  revalidatePath('/blog');
  return { success: true };
}
```

#### Publish Blog Post
```typescript
'use server';
export async function publishBlogPost(id: string) {
  await requireAuth();
  
  const supabase = createClient();
  const { error } = await supabase
    .from('blog_posts')
    .update({
      status: 'published',
      published_at: new Date().toISOString(),
    })
    .eq('id', id);
    
  if (error) throw error;
  
  revalidatePath('/admin/blog');
  revalidatePath('/blog');
  return { success: true };
}
```

---

### Event Management

#### Create Event
```typescript
'use server';
export async function createEvent(formData: FormData) {
  const user = await requireAuth();
  
  const data = {
    title: formData.get('title'),
    slug: formData.get('slug'),
    description: formData.get('description'),
    location: formData.get('location'),
    start_at: formData.get('start_at'),
    end_at: formData.get('end_at'),
    division: formData.get('division'),
    max_attendees: parseInt(formData.get('max_attendees') as string),
    locale: formData.get('locale'),
    created_by: user.id,
  };
  
  const validated = eventSchema.parse(data);
  
  const supabase = createClient();
  const { error } = await supabase
    .from('events')
    .insert(validated);
    
  if (error) throw error;
  
  revalidatePath('/admin/events');
  revalidatePath('/events');
  return { success: true };
}
```

#### Register for Event
```typescript
'use server';
export async function registerForEvent(formData: FormData) {
  const data = {
    event_id: formData.get('event_id'),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    guests: parseInt(formData.get('guests') as string) || 1,
    dietary_restrictions: formData.get('dietary_restrictions'),
    activities: JSON.parse(formData.get('activities') as string || '[]'),
  };
  
  const validated = eventRegistrationSchema.parse(data);
  
  const supabase = createClient();
  const { error } = await supabase
    .from('event_registrations')
    .insert(validated);
    
  if (error) throw error;
  
  // TODO: Send confirmation email
  
  return { success: true };
}
```

---

### Contact Form

#### Submit Contact
```typescript
'use server';
export async function submitContact(formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };
  
  const validated = contactSchema.parse(data);
  
  const supabase = createClient();
  const { error } = await supabase
    .from('contacts')
    .insert(validated);
    
  if (error) throw error;
  
  // TODO: Send notification email to admin
  
  return { success: true };
}
```

---

### Newsletter Subscription

#### Subscribe to Newsletter
```typescript
'use server';
export async function subscribeNewsletter(formData: FormData) {
  const data = {
    email: formData.get('email'),
    locale: formData.get('locale') || 'en',
  };
  
  const validated = newsletterSchema.parse(data);
  
  const supabase = createClient();
  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert(validated);
    
  if (error) {
    // Handle duplicate email gracefully
    if (error.code === '23505') {
      return { success: true, message: 'Already subscribed' };
    }
    throw error;
  }
  
  return { success: true, message: 'Subscribed successfully' };
}
```

---

### Media Upload

#### Upload Image
```typescript
'use server';
export async function uploadImage(formData: FormData) {
  const user = await requireAuth();
  
  const file = formData.get('file') as File;
  if (!file) throw new Error('No file provided');
  
  const supabase = createClient();
  const fileName = `${Date.now()}-${file.name}`;
  
  // Upload to Supabase Storage
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('galleries')
    .upload(fileName, file);
    
  if (uploadError) throw uploadError;
  
  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('galleries')
    .getPublicUrl(fileName);
    
  // Save metadata
  const { error: dbError } = await supabase
    .from('media')
    .insert({
      file_name: file.name,
      storage_path: fileName,
      public_url: publicUrl,
      mime_type: file.type,
      size_bytes: file.size,
      uploaded_by: user.id,
    });
    
  if (dbError) throw dbError;
  
  revalidatePath('/admin/media');
  return { success: true, url: publicUrl };
}
```

---

## Route Handlers

### Health Check

```typescript
// app/api/health/route.ts
export const runtime = 'edge';

export async function GET() {
  return Response.json({
    ok: true,
    status: 'healthy',
    timestamp: Date.now(),
  });
}
```

---

### Web Vitals Analytics

```typescript
// app/api/analytics/web-vitals/route.ts
import { NextRequest } from 'next/server';
import { webVitalsSchema } from '@/lib/validations/analytics';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = webVitalsSchema.parse(body);
    
    // Log to analytics service or database
    console.log('Web Vitals:', validated);
    
    // Send to Sentry/Vercel Analytics
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: 'Invalid payload' },
      { status: 400 }
    );
  }
}
```

---

## Validation Schemas

### Employee Schema
```typescript
// lib/validations/employees.ts
import { z } from 'zod';

export const employeeSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().optional(),
  role: z.string().min(2).max(50),
  department: z.string().optional(),
  status: z.enum(['active', 'inactive']).default('active'),
});

export type EmployeeInput = z.infer<typeof employeeSchema>;
```

### Blog Post Schema
```typescript
export const blogPostSchema = z.object({
  title: z.string().min(5).max(200),
  slug: z.string().min(3).max(200),
  content: z.string().min(100),
  excerpt: z.string().max(300).optional(),
  cover_image_url: z.string().url().optional(),
  status: z.enum(['draft', 'published', 'archived']),
  locale: z.enum(['en', 'fr']),
  author_id: z.string().uuid(),
});
```

### Event Schema
```typescript
export const eventSchema = z.object({
  title: z.string().min(5).max(200),
  slug: z.string().min(3).max(200),
  description: z.string().optional(),
  location: z.string().optional(),
  start_at: z.string().datetime(),
  end_at: z.string().datetime().optional(),
  division: z.enum(['farmhouse', 'enterprise', 'intelligence', 'resorts']).optional(),
  max_attendees: z.number().int().positive().optional(),
  locale: z.enum(['en', 'fr']),
  created_by: z.string().uuid(),
});
```

---

## Error Handling

### Standard Error Response
```typescript
{
  error: string;
  message?: string;
  details?: unknown;
}
```

### Success Response
```typescript
{
  success: true;
  data?: unknown;
  message?: string;
}
```

---

**Document Owner:** Backend Engineer  
**Last Updated:** October 30, 2025
