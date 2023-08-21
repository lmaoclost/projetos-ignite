import { useEffect, useState } from "react";
import styles from './toDoCounter.module.css';

interface toDo {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface toDoProps {
  ToDoList: Array<toDo>;
}

export function ToDoCounter({ ToDoList }: toDoProps) {
  const [completedToDoCount, setCompletedToDoCount] = useState(0);
  const [toDoLenght, setToDoLenght] = useState(0);

  useEffect(() => {
    let completedCount = 0
    ToDoList.forEach(toDo => {
      if (toDo.isCompleted === true) {
        completedCount += 1;
      }
    })
    setCompletedToDoCount(completedCount);
    setToDoLenght(ToDoList.length);
  }, [ToDoList])

  return (
    <div className={styles.countContainer}>
      <h3 className={styles.created}>Tarefas criadas <span>{toDoLenght}</span></h3>
      <h3 className={styles.completed}>Tarefas concluidas <span>{toDoLenght} de {completedToDoCount}</span></h3>
    </div>
  )
}