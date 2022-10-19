import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

export interface TaskProps {
  id: number;
  title: string;
  isComplete: boolean;
  onDeleteTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

export function Task({
  id,
  title,
  isComplete,
  onDeleteTask,
  onToggleTask,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleToggleTodo() {
    onToggleTask(id);
  }

  return (
    <li className={styles.taskContainer}>
      <div>
        <div className={styles.round}>
          <input
            type="checkbox"
            readOnly
            checked={isComplete}
            onClick={handleToggleTodo}
          />
          <label htmlFor="checkbox"></label>
        </div>
        <p className={isComplete ? "completed" : ""}>{title}</p>
      </div>
      <button type="button" onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </li>
  );
}
