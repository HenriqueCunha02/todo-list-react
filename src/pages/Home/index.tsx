import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { DefaultInput } from '../../components/DefaultInput';
import { NavFilters } from '../../components/NavFilters';
import { TaskList } from '../../components/TaskList';
import { Footer } from '../../components/Footer';
import type { Task } from '../../types/Task';

import { useState } from 'react';

export function Home() {
  const [task, setTask] = useState<Task[]>([]);

  function addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
      favorite: false,
    };

    setTask(prevState => [...prevState, newTask]);
  }

  return (
    <Container>
      <Header />
      <DefaultInput addTask={addTask} />

      <NavFilters />
      <TaskList tasks={task} />

      <Footer />
    </Container>
  );
}
