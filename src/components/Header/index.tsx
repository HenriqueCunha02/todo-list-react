import styles from './styles.module.css';

export function Header() {
  return (
    <div className={styles.headerContent}>
      <header className={styles.header}>
        Minhas Tarefas
        <span>Organize o que precisa ser feito</span>
      </header>
      <button className={styles.newTaskButton}> + Nova Tarefa</button>
    </div>
  );
}
