import styles from './styles.module.css';

type Filter = 'all' | 'pending' | 'completed' | 'favorite';

type NavFiltersType = {
  setfilter: (filter: Filter) => void;
  filter: string;
};

export function NavFilters({ setfilter, filter }: NavFiltersType) {
  return (
    <nav className={styles.taskFilters}>
      <button
        className={filter === 'all' ? styles.active : ''}
        onClick={() => setfilter('all')}
      >
        Todas
      </button>
      <button
        className={filter === 'pending' ? styles.active : ''}
        onClick={() => setfilter('pending')}
      >
        Pendentes
      </button>
      <button
        className={filter === 'completed' ? styles.active : ''}
        onClick={() => setfilter('completed')}
      >
        Concluídas
      </button>
      <button
        className={filter === 'favorite' ? styles.active : ''}
        onClick={() => setfilter('favorite')}
      >
        Favoritas
      </button>
    </nav>
  );
}
