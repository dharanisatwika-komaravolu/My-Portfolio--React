import React from "react";
import "../styles.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-text">
        <h2 className="typing-text">Hi, I'm Dharani Satwika</h2>
        <p>A passionate software developer specialized in web technologies</p>
        <a href="#projects" className="btn">View Projects</a>
      </div>
<p></p>
      <div
        className="home-image"
        style={{
          backgroundImage: "url('/myimage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "400px",
          borderRadius: "10px",
          flexShrink: 0,
        }}
      />
    </section>
  );
}

export default Home;
