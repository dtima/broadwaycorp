import { z } from 'zod';

export const projectCreateSchema = z.object({
  name: z.string().min(1),
  status: z.enum(['planned', 'active', 'paused', 'done']).optional(),
});

export const projectUpdateSchema = projectCreateSchema.partial();
