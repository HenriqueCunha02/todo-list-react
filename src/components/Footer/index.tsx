import type { Task } from '../../types/Task';
import { TrashIcon } from 'lucide-react';

import styles from './styles.module.css';

type FooterProps = {
  tasks: Task[];
  onDeleteAllTasks: () => void;
};

export function Footer({ tasks, onDeleteAllTasks }: FooterProps) {
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className={styles.footer}>
      <span>
        {completedTasks.length} de {tasks.length} tarefas concluídas
      </span>
      <button onClick={onDeleteAllTasks}>
        Limpar concluidas <TrashIcon height={14} />
      </button>
    </div>
  );
}
