export interface InventoryItem {
  id: string;
  name: string;
  sku?: string;
  quantity: number;
  location?: string;
  updatedAt: string;
}

export interface TodoItem {
  id: string;
  title: string;
  done: boolean;
  assignee?: string;
  updatedAt: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  status: 'planned' | 'active' | 'paused' | 'done';
  updatedAt: string;
}

export interface EmployeeItem {
  id: string;
  name: string;
  role: string;
  email?: string;
  updatedAt: string;
}
