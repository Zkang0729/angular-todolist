export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export type NewTodo = Omit<ITodo, 'id'> & {
  tmpId: string;
};

