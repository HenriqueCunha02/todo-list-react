import { StarIcon, TrashIcon } from 'lucide-react';
import type { Task } from '../../types/Task';

import styles from './styles.module.css';

type TaskItemProps = {
  tasks: Task;
};

export function TaskItem({ tasks }: TaskItemProps) {
  console.log(tasks);
  return (
    <li key={tasks.id}>
      <input type='checkbox' />
      {tasks.title}
      <div className={styles.icon}>
        <StarIcon fill='#ffc800' strokeWidth={0.3} />
        <TrashIcon strokeWidth={0.3} />
      </div>
    </li>
  );
}
