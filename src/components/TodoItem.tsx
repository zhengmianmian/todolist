import React from 'react';
import { Todo } from '../types';
// Define the props for TodoItem
interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
  onToggleDone: () => void;
}
const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo, onDelete, onToggleDone } = props;
  return (
    <div
      style={todo.done ? { textDecoration: 'line-through' } : { color: 'blue' }}
    >
      {todo.title}
      <button onClick={onToggleDone}>done</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
