import React from 'react';

import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

import { TodoInterface } from './interface'
import './style.css'

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([])
  // 새 할 일 만들기
  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.push(todo)
    setTodos(newTodosState)
  }
  // 원래 있던 할 일 업데이트
  function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.name = event.target.value
    setTodos(newTodosState)
  }

  // 할 일 지우기
  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
    setTodos(newTodosState)
  }

  // 할 일 완료 상태로 바꾸기
  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos]
    // Find the correct todo item and update its 'isCompleted' key
    newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
    setTodos(newTodosState)
  }

  return (
    <div className="App">
      <React.Fragment>
        <h2>My Todo APP</h2>
        <ToDoForm
          todos={todos}
          handleTodoCreate={handleTodoCreate}
        />
        <ToDoList
          todos={todos}
          handleTodoUpdate={handleTodoUpdate}
          handleTodoRemove={handleTodoRemove}
          handleTodoComplete={handleTodoComplete}
        />
      </React.Fragment>
    </div>
  );
}

export default App;