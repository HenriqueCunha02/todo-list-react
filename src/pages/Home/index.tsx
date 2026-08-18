import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { DefaultInput } from '../../components/DefaultInput';
import { NavFilters } from '../../components/NavFilters';
import { TaskList } from '../../components/TaskList';
import { Footer } from '../../components/Footer';

import type { TaskModel } from '../../models/taskModel';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

import { useState } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Home() {
  type Filter = 'all' | 'pending' | 'completed' | 'favorite';
  type Theme = boolean;

  const { state, dispacth } = useTaskContext();

  const [filter, setFilter] = useState<Filter>('all');
  const [theme, setTheme] = useState<Theme>(true);

  function handleCreateNewTask(title: string) {
    const newTask: TaskModel = {
      id: Date.now(),
      title,
      completed: false,
      favorite: false,
    };

    dispacth({ type: TaskActionTypes.ADD_TASK, payload: newTask });
  }

  function handleToggleTask(id: number) {
    dispacth({
      type: TaskActionTypes.CONCLUDE_TASK,
      payload: id,
    });
  }

  function handleDeleteTask(id: number) {
    dispacth({
      type: TaskActionTypes.DELETE_TASK,
      payload: id,
    });
  }

  function handleFavoriteTask(id: number) {
    dispacth({
      type: TaskActionTypes.FAVORITE_TASK,
      payload: id,
    });
  }

  function handleTheme() {
    document.documentElement.classList.toggle('dark');
    setTheme(prev => !prev);
  }

  function onDeleteAllTasks() {
    dispacth({
      type: TaskActionTypes.DELETE_ALL_CONCLUDE,
    });
  }

  const filteredTasks = state.filter(task => {
    if (filter === 'favorite') {
      return task.favorite;
    }

    if (filter === 'pending') {
      return !task.completed;
    }

    if (filter === 'completed') {
      return task.completed;
    }

    return true;
  });

  return (
    <Container>
      <Header theme={theme} handleTheme={handleTheme} />
      <DefaultInput addTask={handleCreateNewTask} />

      <NavFilters setfilter={setFilter} filter={filter} />
      <TaskList
        theme={theme}
        task={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onFavoriteTask={handleFavoriteTask}
      />

      <Footer tasks={state} onDeleteAllTasks={onDeleteAllTasks} />
    </Container>
  );
}
