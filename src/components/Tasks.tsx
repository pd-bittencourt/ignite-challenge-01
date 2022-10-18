import styles from "./Tasks.module.css";
import { PlusCircle } from "phosphor-react";
import { Task } from "./Task";

const TaskList = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isComplete: false,
  },
  {
    id: 2,
    title:
      "Inventore quod soluta nulla, officiis, accusamus dignissimos ut libero explicabo porro, iure tenetur pariatur voluptate?",
    isComplete: true,
  },
  {
    id: 3,
    title: "Accusamus libero nisi illum minus error eligendi!",
    isComplete: false,
  },
];

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

      <div className={styles.progress}>
        <div className={styles.tasksTotal}>
          <span className={styles.title}>Tarefas criadas</span>
          <div className={styles.badge}>5</div>
        </div>
        <div className={styles.tasksDone}>
          <span className={styles.title}>Concluídas</span>
          <div className={styles.badge}>2 de 5</div>
        </div>
      </div>
      <ul className={styles.taskList}>
        {TaskList.map(list => {
          return (
            <Task
              key={list.id}
              title={list.title}
              isComplete={list.isComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}
