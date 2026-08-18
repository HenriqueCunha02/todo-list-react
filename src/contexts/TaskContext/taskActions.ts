import type { TaskModel } from '../../models/taskModel';

export enum TaskActionTypes {
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  CONCLUDE_TASK = 'CONCLUDE_TASK',
  FAVORITE_TASK = 'FAVORITE_TASK',
  DELETE_ALL_CONCLUDE = 'DELETE_ALL_CONCLUDE',
}

export type TaskActionModel =
  | { type: TaskActionTypes.ADD_TASK; payload: TaskModel }
  | { type: TaskActionTypes.DELETE_TASK; payload: number }
  | { type: TaskActionTypes.CONCLUDE_TASK; payload: number }
  | { type: TaskActionTypes.FAVORITE_TASK; payload: number }
  | { type: TaskActionTypes.DELETE_ALL_CONCLUDE };
