import { SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Header() {
  const handleToggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={styles.headerContent}>
      <header className={styles.header}>
        Minhas Tarefas
        <span>Organize o que precisa ser feito</span>
      </header>
      <button className={styles.theme} onClick={handleToggleTheme}>
        <SunIcon strokeWidth={3} />
      </button>
    </div>
  );
}
