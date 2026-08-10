import type { Task } from '../../types/Task';
import { TrashIcon } from 'lucide-react';

import styles from './styles.module.css';

type FooterProps = {
  tasks: Task[];
};

export function Footer({ tasks }: FooterProps) {
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className={styles.footer}>
      <span>
        {completedTasks.length} de {tasks.length} tarefas concluídas
      </span>
      <button>
        Limpar concluidas <TrashIcon height={14} />
      </button>
    </div>
  );
}
