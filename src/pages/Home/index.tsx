import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { DefaultInput } from '../../components/DefaultInput';
import { NavFilters } from '../../components/NavFilters';
import { TaskList } from '../../components/TaskList';

export function Home() {
  return (
    <Container>
      <Header />
      <DefaultInput />

      <NavFilters />
      <TaskList />
    </Container>
  );
}
