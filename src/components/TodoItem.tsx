import React from 'react';
import { Todo } from '../types';
// Define the props for TodoItem
interface TodoItemProps {
  todo: Todo;
}
const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todo } = props;
  return (
    <div
      style={todo.done ? { textDecoration: 'line-through' } : { color: 'blue' }}
    >
      {todo.title}
    </div>
  );
};

export default TodoItem;
