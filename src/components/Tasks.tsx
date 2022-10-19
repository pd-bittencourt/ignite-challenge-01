import styles from "./Tasks.module.css";
import { PlusCircle } from "phosphor-react";
import { Task, TaskProps } from "./Task";

import { ChangeEvent, FormEvent, useState } from "react";

import Clipboard from "../assets/icon-clipboard.svg";

export function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTaskText, setNewTaskText] = useState("");

  const totalTasks = tasks.length;
  const tasksDone = tasks.filter(task => task.isComplete);
  const totalTasksDone = tasksDone.length;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: Math.random(),
      title: newTaskText,
      isComplete: false,
      onDeleteTask: () => {
        onDeleteTask;
      },
      onToggleTask: () => {
        onToggleTask;
      },
    };

    if (newTaskText === "") return;

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function onDeleteTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  function onToggleTask(id: number) {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );

    setTasks(newTasks);
    console.log(tasks);
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
      {tasks.length === 0 && (
        <div className={styles.empty}>
          <img src={Clipboard} alt="clipboard icon" />
          <p>
            Você ainda não tem tarefas cadastradas <br />
            <span>Crie tarefas e organize seus itens a fazer</span>
          </p>
        </div>
      )}
      <ul className={styles.taskList}>
        {tasks.map(list => {
          return (
            <Task
              id={list.id}
              key={list.id}
              title={list.title}
              isComplete={list.isComplete}
              onDeleteTask={onDeleteTask}
              onToggleTask={onToggleTask}
            />
          );
        })}
      </ul>
    </div>
  );
}
