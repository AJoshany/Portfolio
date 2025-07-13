import { useRoutes } from "react-router";
import "./Background.css";
import "./App.css";
import routes from "./routes";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect } from "react";
import { initParticles } from './Utility/mainBackground';

function App() {

  const router = useRoutes(routes)

  useEffect(() => {
    initParticles();
  }, []);

  return (
    <>
      <div className="main-content">
        <Navbar />
        <div class="gradient-background">
          <div class="gradient-sphere sphere-1"></div>
          <div class="gradient-sphere sphere-2"></div>
          <div class="gradient-sphere sphere-3"></div>
          <div class="glow"></div>
          <div class="grid-overlay"></div>
          <div class="noise-overlay"></div>
          <div class="particles-container" id="particles-container"></div>
        </div>

        <div className="main__routes">

          {router}
        </div>
      </div>

    </>
    // <>
    //   <div className="main">

    //     {/* <h2>Loading ... </h2> */}
    //     <Navbar />
    //     {router}
    //   </div>
    // </>
  );
}

export default App;
