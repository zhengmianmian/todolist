import React, { useState } from 'react';
import { Todo } from '../types';
import TodoItem from '../components/TodoItem';
import styles from './Todos.module.css';
import { v4 as uuidv4 } from 'uuid';

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
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  const toggleDone = (index: number) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const todolist = todos.map((todo, index) => (
    <TodoItem
      key={uuidv4()}
      todo={todo}
      onDelete={() => deleteTodo(index)}
      onToggleDone={() => toggleDone(index)}
    />
  ));
  const handleAdd = () => {
    let newTodos = [...todos, { title: title, done: done }];
    setTodos(newTodos);
    setTitle('');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Todolist</h1>
      <div className={styles.flexContainer}>
        <div>{todolist}</div>
        <div>
          <h2>add a new todoitem</h2>
          <div>
            <label>Title: </label>
            <br />
            <input
              placeholder="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Done?</label>
            <br />
            <input
              type="radio"
              id="False"
              name="done"
              value="False"
              onChange={(e) => setDone(false)}
            />
            <label>False</label>
            <br />
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
            <button type="button" onClick={handleAdd}>
              add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
