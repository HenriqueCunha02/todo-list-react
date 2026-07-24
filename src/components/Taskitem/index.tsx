import { StarIcon, TrashIcon } from 'lucide-react';
import type { Task } from '../../types/Task';

import styles from './styles.module.css';

type TaskItemProps = {
  task: Task;
  onToggleTask: (id: number) => void;
};

export function TaskItem({ task, onToggleTask }: TaskItemProps) {
  console.log(task);
  return (
    <li>
      <input type='checkbox' onChange={() => onToggleTask(task.id)} />
      {task.title}
      <div className={styles.icon}>
        <StarIcon fill='#ffc800' strokeWidth={0.3} />
        <TrashIcon strokeWidth={0.3} />
      </div>
    </li>
  );
}
