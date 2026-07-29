import type { Task } from '../../types/Task';
import styles from './styles.module.css';
import { TaskItem } from '../Taskitem';

type TaskListProps = {
  task: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onFavoriteTask: (id: number) => void;
};

export function TaskList({
  task,
  onToggleTask,
  onDeleteTask,
  onFavoriteTask,
}: TaskListProps) {
  return (
    <div className={styles.taskList}>
      <ul>
        {task.map(task => (
          <TaskItem
            task={task}
            key={task.id}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
            onFavoriteTask={onFavoriteTask}
          />
        ))}
      </ul>
    </div>
  );
}
