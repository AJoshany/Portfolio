import { useRoutes } from "react-router";
import "./App.css";
import routes from "./routes";
import Navbar from "./Navbar/Navbar";

function App() {

  const router = useRoutes(routes)

  return (
    <>
      <div className="main">

        <h2>Loading ... </h2>
        {/* <Navbar />
        {router} */}
      </div>
    </>
  );
}

export default App;
