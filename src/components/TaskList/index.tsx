import type { Task } from '../../types/Task';
import styles from './styles.module.css';
import { TaskItem } from '../Taskitem';

type TaskListProps = {
  task: Task[];
  theme: boolean;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onFavoriteTask: (id: number) => void;
};

export function TaskList({
  task,
  theme,
  onToggleTask,
  onDeleteTask,
  onFavoriteTask,
}: TaskListProps) {
  return (
    <div className={styles.taskList}>
      <ul>
        {task.map(task => (
          <TaskItem
            theme={theme}
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
