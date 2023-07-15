import "./App.scss";
import Routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";

function App() {
   const router = useRoutes(Routes);

   return (
      <>
         <TopBar />
         {router}
      </>
   );
}

export default App;
