import { FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { PlusCircle } from '@phosphor-icons/react'
import { Header } from './components/Header'
import { EmptyToDoList } from './components/EmptyToDoList'
import { ToDo } from './components/ToDo'
import { ToDoCounter } from './components/ToDoCounter'

import styles from './App.module.css'

interface toDoProps {
  id: string;
  description: string;
  isCompleted: boolean;
}

function App() {
  const [toDoList, setToDoList] = useState<toDoProps[]>([]);
  const [toDoDescription, setToDoDescription] = useState('');

  function handleToDoRegister(e: FormEvent) {
    e.preventDefault();
    if (toDoDescription.length > 0) {
      const newToDo = { id: uuid(), description: toDoDescription, isCompleted: false }

      setToDoList([...toDoList, newToDo]);
      setToDoDescription('');
    }
  }

  const removeToDoFromList = (toDoToBeRemoved: toDoProps) => {
    const newToDoList = toDoList.filter((toDo) => {
      return toDoToBeRemoved !== toDo
    });
    setToDoList(newToDoList);
  }

  const toggleStatus = (toDoToBeToggled: toDoProps) => {
    const listWithToggledToDo = toDoList.map((toDo) => {
      if (toDoToBeToggled === toDo) {
        toDo.isCompleted = !toDo.isCompleted
      }
      return toDo
    });
    setToDoList(listWithToggledToDo);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.mainContainer}>
          <form className={styles.formContainer} onSubmit={handleToDoRegister}>
            <input
              placeholder="Adicione uma nova tarefa"
              name="description"
              id="description"
              value={toDoDescription}
              onChange={(e) => { setToDoDescription(e.target.value) }}
            />

            <button className={styles.createButton} type="submit">
              <span>Criar</span>
              <PlusCircle size={16} />
            </button>
          </form>
          <ToDoCounter ToDoList={toDoList} />
          {toDoList.length > 0 ? (
            toDoList.map((toDoItem) => (
              <ToDo
                key={toDoItem.id}
                toDo={toDoItem}
                toggleStatus={() => toggleStatus(toDoItem)}
                removeToDoFromList={() => removeToDoFromList(toDoItem)}
              />
            )
            )
          )
            : <EmptyToDoList />
          }
        </main>
      </div>
    </>
  )
}

export default App
