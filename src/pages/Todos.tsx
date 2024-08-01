import React, { useState } from 'react';
import { Todo } from '../types';
import TodoItem from '../components/TodoItem';

const things: Todo[] = [
  {
    title: 'swim',
    done: false,
  },
  {
    title: 'feed the dog',
    done: true,
  },
  {
    title: 'go hiking',
    done: false,
  },
];

const Todos: React.FC = () => {
  const [title, setTitle] = useState<string>('new todo');
  const [done, setDone] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>(things);
  const todolist = todos.map((todo) => <TodoItem todo={todo} />);
  const handleAdd = () => {
    let newTodos = todos.map((todo) => todo);
    newTodos.push({ title: title, done: done });
    setTodos(newTodos);
    setTitle('');
  };
  return (
    <div>
      <h1>Todolist</h1>
      <div>
        <div>{todolist}</div>
        <div>
          <h2>add a new todoitem</h2>
          <div>
            <label>title: </label>
            <input
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>done</label>
          </div>
          <div>
            <input
              type="radio"
              id="False"
              name="done"
              value="False"
              onChange={(e) => setDone(false)}
            />
            <label>False</label>
          </div>
          <div>
            <input
              type="radio"
              id="True"
              name="done"
              value="True"
              onChange={(e) => setDone(true)}
            />
            <label>True</label>
          </div>
          <div>
            <button onClick={handleAdd}>add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
