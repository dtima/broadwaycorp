import { z } from 'zod';

export const todoCreateSchema = z.object({
  title: z
    .string()
    .min(1)
    .refine((val) => val.trim().length > 0, { message: 'Title cannot be only whitespace' }),
  assignee: z.string().optional(),
});

export const todoToggleSchema = z.object({
  done: z.boolean(),
});
