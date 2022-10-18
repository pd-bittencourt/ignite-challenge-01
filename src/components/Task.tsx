import { Trash } from "phosphor-react";

import styles from "./Task.module.css";

interface TaskProps {
  title: string;
  isComplete: boolean;
}

export function Task({ title, isComplete }: TaskProps) {
  return (
    <li className={styles.taskContainer}>
      <div>
        <div className={styles.round}>
          <input type="checkbox" readOnly checked={isComplete} />
          <label htmlFor="checkbox"></label>
        </div>

        <p>{title}</p>
      </div>
      <button type="button">
        <Trash size={16} />
      </button>
    </li>
  );
}
