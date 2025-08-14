import { z } from 'zod';

export const todoCreateSchema = z.object({
  title: z.string().min(1),
  assignee: z.string().optional(),
});

export const todoToggleSchema = z.object({
  done: z.boolean(),
});
