export type Post = {
  id: string,
  title: string,
}

export enum TodoStatus {
  pending = 'pending',
  completed = 'completed',
}

export type Todo = {
  id: number,
  title: string,
  status: TodoStatus;
}

export type User = {
  userId: string
}