import styles from './styles.module.css';

export function NavFilters() {
  return (
    <nav className={styles.taskFilters}>
      <button className={styles.active}>Todas</button>
      <button>Pendentes</button>
      <button>Concluídas</button>
    </nav>
  );
}
