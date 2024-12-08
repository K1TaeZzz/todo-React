import React from 'react';

import styles from './TodoList.module.css';
import { RiTodoFill } from 'react-icons/ri';
import { IoMdCheckmark } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

const TodoList = ({ task, removeTask, toggleTodo }) => {
  return (
    <div className={`${styles.todoList} ${task.completed ? styles.completedTodo : ''}`}>
      <ul className={styles.tasks}>
        <li>
          <div className={styles.block}>
            <RiTodoFill className={styles.ri} />
s
            {task.text}
          </div>
          <div className={styles.block}>
            <MdDeleteForever className={styles.delete} onClick={() => removeTask(task.id)} />

            <IoMdCheckmark className={styles.checkmark} onClick={() => toggleTodo(task.id)} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
