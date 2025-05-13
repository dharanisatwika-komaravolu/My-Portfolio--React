import React from "react";
import "../styles.css";

function Certifications() {
  const certificationList = [
    {
      title: "Salesforce AI Associate",
      organization: "Salesforce",
      date: "Feb 2025",
    },
    {
      title: "React Basics",
      organization: "Coursera",
      date: "Feb 2025",
    },
    {
      title: "Typescript in React",
      organization: "Coursera",
      date: "Feb 2025",
    },
    {
      title: "Introduction to Software Engineering",
      organization: "IBM Coursera",
      date: "Feb 2025",
    },
    {
      title: "TCS CodeVita Season 10 – Global Coding Contest",
      organization: "Tata Consultancy Servicess",
      date: "May 2022",
    },
    {
      title: "Advanced Styling with Responsive Design",
      organization: "University Of Michigan",
      date: "October 2020",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      organization: "University Of Michigan",
      date: "October 2020",
    },
    {
        title: "Interactivity with JavaScript",
        organization: "University Of Michigan",
        date: "September 2020",
      },
      {
        title: "Programming for Everybody (Getting Started with Python)",
        organization: "Google",
        date: "October 2020",
      },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-div">
        <h2>Certifications</h2>
        <ul className="certification-list">
          {certificationList.map((cert, index) => (
            <li key={index} className="certification-card">
              <h3>{cert.title}</h3>
              <p>{cert.organization}</p>
              <p className="cert-date">{cert.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
