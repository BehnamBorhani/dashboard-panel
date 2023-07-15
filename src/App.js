import './App.scss';
import Routes from './routes';
import { useRoutes } from 'react-router-dom';

function App() {
  const router = useRoutes(Routes)

  return (
    <>
      {router}
    </>
  );
}

export default App;
