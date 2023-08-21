import Icon from '../../assets/clipboard.svg'
import styles from './emptyToDoList.module.css'

export function EmptyToDoList() {
  return (
    <div className={styles.container}>
      <img src={Icon} alt="" />
      <h3>Você ainda não tem tarefas cadastradas</h3>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}

export default EmptyToDoList;