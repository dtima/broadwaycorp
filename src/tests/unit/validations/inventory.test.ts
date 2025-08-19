import { describe, it, expect } from 'vitest';
import { inventoryCreateSchema, inventoryUpdateSchema } from '@/lib/validations/inventory';

describe('Inventory Validation Schemas', () => {
  describe('inventoryCreateSchema', () => {
    it('should validate valid inventory data', () => {
      const validData = {
        name: 'Laptop',
        sku: 'LAP-001',
        quantity: 10,
        location: 'Warehouse A',
      };

      const result = inventoryCreateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should validate inventory data without optional fields', () => {
      const validData = {
        name: 'Mouse',
        quantity: 5,
      };

      const result = inventoryCreateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should reject empty name', () => {
      const invalidData = {
        name: '',
        quantity: 10,
      };

      const result = inventoryCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('name');
      }
    });

    it('should reject negative quantity', () => {
      const invalidData = {
        name: 'Keyboard',
        quantity: -5,
      };

      const result = inventoryCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('quantity');
      }
    });

    it('should reject non-integer quantity', () => {
      const invalidData = {
        name: 'Monitor',
        quantity: 5.5,
      };

      const result = inventoryCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].path).toContain('quantity');
      }
    });

    it('should reject missing required fields', () => {
      const invalidData = {
        sku: 'SKU-001',
        location: 'Warehouse B',
      };

      const result = inventoryCreateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues).toHaveLength(2);
      }
    });
  });

  describe('inventoryUpdateSchema', () => {
    it('should validate partial inventory data', () => {
      const validData = {
        quantity: 15,
        location: 'Warehouse C',
      };

      const result = inventoryUpdateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should validate empty update object', () => {
      const validData = {};

      const result = inventoryUpdateSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validData);
      }
    });

    it('should reject invalid partial data', () => {
      const invalidData = {
        name: '',
        quantity: -1,
      };

      const result = inventoryUpdateSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues).toHaveLength(2);
      }
    });
  });
});
