import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import TodoList from './TodoList';
import styles from './TodoForm.module.css';

const TodoForm = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    const newTodo = {
      text: taskInput,
      completed: false,
      id: uuidv4(),
    };
    setTasks([...tasks, newTodo]);
    setTaskInput('');
  };
  const removeTask = (id) => {
    setTasks(tasks.filter((s) => s.id !== id));
  };
  const toggleTodo = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : { ...task })));
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.todoForm}>
      <form onSubmit={onSubmitHandle}>
        <input
          type="text"
          placeholder="Введите задачу..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <span>
          <button onClick={addTask} type="submit">
            Submit
          </button>
        </span>
      </form>

      <h2>taskList</h2>
      {tasks.length === 0 ? (
        <h2>Пусто, нет задач.</h2>
      ) : (
        <div>
          {tasks.map((task) => (
            <TodoList key={task.id} task={task} removeTask={removeTask} toggleTodo={toggleTodo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoForm;
