import { describe, it, expect } from 'vitest';
import { todoCreateSchema, todoToggleSchema } from '@/lib/validations/todos';

describe('Todo Validation Schemas', () => {
  describe('todoCreateSchema', () => {
    it('should validate valid todo data', () => {
      const validData = {
        title: 'Complete project documentation',
        assignee: 'John Doe',
      };

      const result = todoCreateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should validate todo data without assignee', () => {
      const validData = {
        title: 'Review code changes',
      };

      const result = todoCreateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should reject empty title', () => {
      const invalidData = {
        title: '',
        assignee: 'Jane Smith',
      };

      const result = todoCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('title');
      }
    });

    it('should reject missing title', () => {
      const invalidData = {
        assignee: 'Bob Wilson',
      };

      const result = todoCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('title');
      }
    });

    it('should reject whitespace-only title', () => {
      const invalidData = {
        title: '   ',
        assignee: 'Alice Brown',
      };

      const result = todoCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('title');
      }
    });

    it('should validate assignee with empty string', () => {
      const validData = {
        title: 'Test todo',
        assignee: '',
      };

      const result = todoCreateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.assignee).toBe('');
      }
    });
  });

  describe('todoToggleSchema', () => {
    it('should validate done: true', () => {
      const validData = {
        done: true,
      };

      const result = todoToggleSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.done).toBe(true);
      }
    });

    it('should validate done: false', () => {
      const validData = {
        done: false,
      };

      const result = todoToggleSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.done).toBe(false);
      }
    });

    it('should reject missing done field', () => {
      const invalidData = {};

      const result = todoToggleSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('done');
      }
    });

    it('should reject non-boolean done value', () => {
      const invalidData = {
        done: 'true',
      };

      const result = todoToggleSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('done');
      }
    });

    it('should reject null done value', () => {
      const invalidData = {
        done: null,
      };

      const result = todoToggleSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('done');
      }
    });
  });
});
