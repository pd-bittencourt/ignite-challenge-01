import styles from "./Tasks.module.css";
import { PlusCircle } from "phosphor-react";

export function Tasks() {
  return (
    <div className={styles.wrapper}>
      <form>
        <input
          className={styles.todoInput}
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button className={styles.btnCreate}>
          Criar <PlusCircle size={20} weight="bold" />
        </button>
      </form>

      <div className={styles.counter}>
        <div className={styles.tasksTotal}>
          <span className={styles.title}>Tarefas criadas</span>
          <div className={styles.badge}>5</div>
        </div>
        <div className={styles.tasksDone}>
          <span className={styles.title}>Concluídas</span>
          <div className={styles.badge}>2 de 5</div>
        </div>
      </div>
      <div>
        <ul>
          <li>tarefa 1</li>
          <li>tarefa 2</li>
          <li>tarefa 3</li>
          <li>tarefa 4</li>
        </ul>
      </div>
    </div>
  );
}
