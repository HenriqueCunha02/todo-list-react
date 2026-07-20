import { TrashIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <span>2 de 6 tarefas concluidas</span>
      <button>
        Limpar concluidas <TrashIcon height={14} />
      </button>
    </div>
  );
}
