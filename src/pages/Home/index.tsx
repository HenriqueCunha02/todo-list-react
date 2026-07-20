import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { DefaultInput } from '../../components/DefaultInput';
import { NavFilters } from '../../components/NavFilters';
import { TaskList } from '../../components/TaskList';
import { Footer } from '../../components/Footer';

export function Home() {
  return (
    <Container>
      <Header />
      <DefaultInput />

      <NavFilters />
      <TaskList />

      <Footer />
    </Container>
  );
}
