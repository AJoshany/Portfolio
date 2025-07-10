import { useRoutes } from "react-router";
import "./App.css";
import routes from "./routes";

function App() {

  const router = useRoutes(routes)

  return (
    <>
      {/* <div className="main">
        <h1>We Are Comming Soon</h1>
        <img
          className="first-img"
          src="/images/1.jpg"
          alt="Ali Joshany"
          width="auto"
          height="100%"
        />
      </div> */}
      {router}
    </>
  );
}

export default App;
