export type CategoryType = 'Idea' | 'Task' | 'Random Thought';

export interface ITotalInput {
  category: CategoryType;
  archived: boolean;
}

export interface ITotal {
  category: string;
  active: number;
  archived: number;
}
