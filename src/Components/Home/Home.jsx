import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home--main">
      <div className="home__left">
        <h1 className="home--heading">Hi , i'm Ali Joshany</h1>
        <p>
          👨‍💻 Front-End Developer in training, passionate about creating modern,
          responsive, and user-friendly interfaces. Skilled in HTML, CSS,
          JavaScript, React, Tailwind, Bootstrap, and Material-UI. Currently
          leveling up through a hands-on Front-End Bootcamp.
          <br />
          💡 I love clean code, collaboration, and turning ideas into real
          digital experiences. Always learning, always building.
        </p>
        <button className="home--btn">
          <a href="/projects">Projects</a>
        </button>
      </div>

      <div className="home__right">
        <img src="images/home.webp" alt="Ali Joshany" className="home--img" />
      </div>
    </div>
  );
}
