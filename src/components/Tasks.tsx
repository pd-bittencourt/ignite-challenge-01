import styles from "./Tasks.module.css";
import { PlusCircle } from "phosphor-react";
import { Task, TaskProps } from "./Task";
import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from "react";

interface TaskListProps extends TaskProps {
  id: number;
}

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
  const [tasks, setTasks] = useState<TaskListProps[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  const totalTasks = tasks.length;
  const tasksDone = tasks.filter(task => {
    return task.isComplete;
  });
  const totalTasksDone = tasksDone.length;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: Math.random(),
      title: newTaskText,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleCreateNewTask}>
        <input
          className={styles.todoInput}
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
        />
        <button className={styles.btnCreate}>
          Criar <PlusCircle size={20} weight="bold" />
        </button>
      </form>

      <div className={styles.progress}>
        <div className={styles.tasksTotal}>
          <span className={styles.title}>Tarefas criadas</span>
          <div className={styles.badge}>{totalTasks}</div>
        </div>
        <div className={styles.tasksDone}>
          <span className={styles.title}>Concluídas</span>
          <div className={styles.badge}>
            {totalTasksDone} de {totalTasks}
          </div>
        </div>
      </div>
      <ul className={styles.taskList}>
        {tasks.map(list => {
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
