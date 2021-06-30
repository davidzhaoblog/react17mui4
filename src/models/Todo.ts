export interface Todo {
  id: string,
  completed: boolean
  text: string, 
  amount: number,
  updatedDateTime: string
}

export function createTodoDefault(): Todo {
  return {
      id: 0,
      text: '',
      completed: false,
      number: 0,
      updatedDateTime: (new Date()).toISOString()
  } as unknown as Todo;
}