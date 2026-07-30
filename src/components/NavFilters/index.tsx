import styles from './styles.module.css';

type Filter = 'all' | 'pending' | 'completed';

type NavFiltersType = {
  setfilter: (filter: Filter) => void;
};

export function NavFilters({ setfilter }: NavFiltersType) {
  return (
    <nav className={styles.taskFilters}>
      <button className={styles.active} onClick={() => setfilter('all')}>
        Todas
      </button>
      <button onClick={() => setfilter('pending')}>Pendentes</button>
      <button onClick={() => setfilter('completed')}>Concluídas</button>
    </nav>
  );
}
