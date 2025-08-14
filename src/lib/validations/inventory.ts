import { z } from 'zod';

export const inventoryCreateSchema = z.object({
  name: z.string().min(1),
  sku: z.string().min(1).optional(),
  quantity: z.number().int().nonnegative(),
  location: z.string().optional(),
});

export const inventoryUpdateSchema = inventoryCreateSchema.partial();
