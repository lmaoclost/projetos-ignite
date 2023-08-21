import { Trash } from '@phosphor-icons/react';
import styles from './toDo.module.css';

interface ToDoProps {
  toDo: {
    id: string;
    description: string;
    isCompleted: boolean;
  };
  toggleStatus: () => void;
  removeToDoFromList: () => void;
}

export function ToDo({ toDo, toggleStatus, removeToDoFromList }: ToDoProps) {

  return (
    <div className={styles.container}>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          name={`toggle-${toDo.id}`}
          id={toDo.id}
          onChange={toggleStatus}
          checked={toDo.isCompleted}
        />
        <label htmlFor={toDo.id}></label>
      </div>
      <div className={styles.text}>
        <h3>
          {toDo.isCompleted ?
            <del>{toDo.description}</del>
            : `${toDo.description}`
          }
        </h3>
      </div>

      <button onClick={removeToDoFromList}>
        <Trash size={16} />
      </button>
    </div>
  );
}