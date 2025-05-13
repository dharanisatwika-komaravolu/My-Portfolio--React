// import React from "react";
// import "../styles.css";

// function Contact() {
//   return (
//     <section id="contact" className="contact">
//        <div className="contact-div">
//       <h2>Contact Me</h2>
//       <p>Email: dharanisatwika2907@gmail.com</p>
//       <a href="#linkedin" className="linkedin"><p>LinkedIn:</p>www.linkedin.com/in/dharani-satwika-komaravolu</a>
//       </div> 
//     </section>
//   );
// }

// export default Contact;



import React from "react";
import "../styles.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-div">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:dharanisatwika2907@gmail.com">dharanisatwika2907@gmail.com</a></p>
        <p>
          Phone Number:{" "}
          <a href="tel:+16823761319">+1 (682) 376-1319</a>
        </p>
        <p>
          <strong style={{ color: "black" }}>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/dharani-satwika-komaravolu"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/in/dharani-satwika-komaravolu
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
