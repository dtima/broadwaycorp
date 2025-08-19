import { describe, it, expect } from 'vitest';
import { employeeCreateSchema, employeeUpdateSchema } from '@/lib/validations/employees';

describe('Employee Validation Schemas', () => {
  describe('employeeCreateSchema', () => {
    it('should validate valid employee data', () => {
      const validData = {
        name: 'John Doe',
        role: 'Engineer',
        email: 'john@example.com',
      };

      const result = employeeCreateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should validate employee data without email', () => {
      const validData = {
        name: 'Jane Smith',
        role: 'Manager',
      };

      const result = employeeCreateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should validate custom role string', () => {
      const validData = {
        name: 'Bob Wilson',
        role: 'Senior Developer',
      };

      const result = employeeCreateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should reject empty name', () => {
      const invalidData = {
        name: '',
        role: 'Engineer',
      };

      const result = employeeCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('name');
      }
    });

    it('should reject missing name', () => {
      const invalidData = {
        role: 'Engineer',
      };

      const result = employeeCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('name');
      }
    });

    it('should reject invalid email format', () => {
      const invalidData = {
        name: 'John Doe',
        role: 'Engineer',
        email: 'invalid-email',
      };

      const result = employeeCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('email');
      }
    });
  });

  describe('employeeUpdateSchema', () => {
    it('should validate partial employee data', () => {
      const validData = {
        name: 'Updated Name',
      };

      const result = employeeUpdateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should validate empty update object', () => {
      const validData = {};

      const result = employeeUpdateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should reject invalid partial data', () => {
      const invalidData = {
        name: '',
        email: 'invalid-email',
      };

      const result = employeeUpdateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues).toHaveLength(2);
      }
    });
  });
});
