import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispacth] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    localStorage.setItem('@todo:tasks', JSON.stringify(state));
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispacth }}>
      {children}
    </TaskContext.Provider>
  );
}
