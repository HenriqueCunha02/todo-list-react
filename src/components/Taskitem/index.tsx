import { StarIcon, TrashIcon } from 'lucide-react';
import type { TaskModel } from '../../models/taskModel';

import styles from './styles.module.css';

type TaskItemProps = {
  task: TaskModel;
  theme: boolean;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onFavoriteTask: (id: number) => void;
};

export function TaskItem({
  task,
  theme,
  onToggleTask,
  onDeleteTask,
  onFavoriteTask,
}: TaskItemProps) {
  return (
    <li>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      {task.title}
      <div className={styles.icon}>
        <StarIcon
          color={!theme ? '#2563eb' : '#6366f1'}
          onClick={() => onFavoriteTask(task.id)}
          fill={
            task.favorite ? (!theme ? '#2563eb' : '#6366f1') : 'transparent'
          }
        />
        <TrashIcon
          color={!theme ? '#2563eb' : '#6366f1'}
          onClick={() => onDeleteTask(task.id)}
        />
      </div>
    </li>
  );
}
