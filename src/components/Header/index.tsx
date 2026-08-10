import { MoonIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

type HeaderProps = {
  theme: boolean;
  handleTheme: () => void;
};

export function Header({ theme, handleTheme }: HeaderProps) {
  return (
    <div className={styles.headerContent}>
      <header className={styles.header}>
        Minhas Tarefas
        <span>Organize o que precisa ser feito</span>
      </header>
      <button className={styles.theme} onClick={handleTheme}>
        {theme ? <MoonIcon strokeWidth={3} /> : <SunIcon strokeWidth={3} />}
      </button>
    </div>
  );
}
