import { StarIcon, TrashIcon } from 'lucide-react';
import type { Task } from '../../types/Task';

import styles from './styles.module.css';

type TaskItemProps = {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

export function TaskItem({ task, onToggleTask, onDeleteTask }: TaskItemProps) {
  return (
    <li>
      <input type='checkbox' onChange={() => onToggleTask(task.id)} />
      {task.title}
      <div className={styles.icon}>
        <StarIcon fill='#ffc800' strokeWidth={0.3} />
        <TrashIcon strokeWidth={0.3} onClick={() => onDeleteTask(task.id)} />
      </div>
    </li>
  );
}
