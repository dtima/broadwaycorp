/**
 * Employee validation schemas
 */

import { z } from 'zod';
import { emailSchema } from './common';

export const employeeSchema = z.object({
  name: z.string().min(2).max(100),
  email: emailSchema.optional(),
  role: z.string().min(2).max(50),
  department: z.string().optional(),
  status: z.enum(['active', 'inactive']).default('active'),
});

export type EmployeeInput = z.infer<typeof employeeSchema>;

export const employeeUpdateSchema = employeeSchema.partial();
