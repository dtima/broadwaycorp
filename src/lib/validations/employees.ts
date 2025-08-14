import { z } from 'zod';

export const employeeCreateSchema = z.object({
  name: z.string().min(1),
  role: z.enum(['Engineer', 'Manager', 'Admin', 'Staff']).or(z.string().min(1)),
  email: z.string().email().optional(),
});

export const employeeUpdateSchema = employeeCreateSchema.partial();
