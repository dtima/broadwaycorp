import { describe, it, expect } from 'vitest';
import { projectCreateSchema, projectUpdateSchema } from '@/lib/validations/projects';

describe('Project Validation Schemas', () => {
  describe('projectCreateSchema', () => {
    it('should validate valid project data', () => {
      const validData = {
        name: 'Website Redesign',
        status: 'active',
      };

      const result = projectCreateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should validate project data without status', () => {
      const validData = {
        name: 'Mobile App Development',
      };

      const result = projectCreateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual({ ...validData, status: undefined });
      }
    });

    it('should validate all valid status values', () => {
      const validStatuses = ['planned', 'active', 'paused', 'done'] as const;

      validStatuses.forEach((status) => {
        const validData = {
          name: `Project ${status}`,
          status,
        };

        const result = projectCreateSchema.safeParse(validData);
        expect(result.success).toBe(true);
        if (result.success) {
          expect(result.data.status).toBe(status);
        }
      });
    });

    it('should reject empty name', () => {
      const invalidData = {
        name: '',
        status: 'active',
      };

      const result = projectCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('name');
      }
    });

    it('should reject missing name', () => {
      const invalidData = {
        status: 'planned',
      };

      const result = projectCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('name');
      }
    });

    it('should reject invalid status', () => {
      const invalidData = {
        name: 'Invalid Project',
        status: 'invalid-status',
      };

      const result = projectCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('status');
      }
    });
  });

  describe('projectUpdateSchema', () => {
    it('should validate partial project data', () => {
      const validData = {
        name: 'Updated Project Name',
      };

      const result = projectUpdateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should validate status update only', () => {
      const validData = {
        status: 'done',
      };

      const result = projectUpdateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should validate empty update object', () => {
      const validData = {};

      const result = projectUpdateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should reject invalid partial data', () => {
      const invalidData = {
        name: '',
        status: 'invalid-status',
      };

      const result = projectUpdateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues).toHaveLength(2);
      }
    });
  });
});
