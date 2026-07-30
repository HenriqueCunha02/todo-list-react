import { StarIcon, TrashIcon } from 'lucide-react';
import type { Task } from '../../types/Task';

import styles from './styles.module.css';

type TaskItemProps = {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onFavoriteTask: (id: number) => void;
};

export function TaskItem({
  task,
  onToggleTask,
  onDeleteTask,
  onFavoriteTask,
}: TaskItemProps) {
  return (
    <li>
      <input type='checkbox' onChange={() => onToggleTask(task.id)} />
      {task.title}
      <div className={styles.icon}>
        <StarIcon color='#6366f1' onClick={() => onFavoriteTask(task.id)} />
        <TrashIcon color='#6366f1' onClick={() => onDeleteTask(task.id)} />
      </div>
    </li>
  );
}
