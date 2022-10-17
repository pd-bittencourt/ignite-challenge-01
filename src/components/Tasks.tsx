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
      <div>tarefas criadas</div>
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
