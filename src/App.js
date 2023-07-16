import "./App.scss";
import Routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
   const router = useRoutes(Routes);

   return (
      <>
         <TopBar />
         <div className="container">
            <Sidebar />
            {router}
         </div>
      </>
   );
}

export default App;
