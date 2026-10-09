import Search from '../componentes/Search';
import LastReleases from '../componentes/LastReleases';
import { AppContainer } from '../componentes/AppContainer';

function Home() {
  return (
    <AppContainer>
      <Search/>
      <LastReleases/>
    </AppContainer>
  );
}

export default Home;