import { createContext } from 'react';
import { type TaskModel } from '../../models/taskModel';
import { initialTaskState } from './initialTaskState';
import type { TaskActionModel } from './taskActions';

export type TaskContextProps = {
  state: TaskModel;
  dispacth: React.Dispatch<TaskActionModel>;
};

const initalContextValue = {
  state: initialTaskState,
  dispacth: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initalContextValue);
