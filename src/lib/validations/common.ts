/**
 * Common validation schemas
 */

import { z } from 'zod';

export const localeSchema = z.enum(['en', 'fr']);

export const statusSchema = z.enum(['draft', 'published', 'archived']);

export const emailSchema = z.string().email().min(5).max(255);

export const phoneSchema = z.string().regex(/^\+?[1-9]\d{1,14}$/);

export const urlSchema = z.string().url();

export const slugSchema = z
  .string()
  .min(3)
  .max(200)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
