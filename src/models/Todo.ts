export interface Todo {
  id: string,
  completed: boolean
  text: string, 
}

export function createTodoDefault(): Todo {
  return {
      id: 0,
      text: '',
      completed: false,
  } as unknown as Todo;
}