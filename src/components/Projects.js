import React from "react";
import "../styles.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Task Management System - Medication Reminder</h3>
          <p>•	Designed and developed a medication management system with relational database structures (MySQL) supporting secure and efficient CRUD operations for users, prescriptions, and schedules.</p>
<p> •	Implemented features like data integrity checks, role-based access control (RBAC), and real-time alerting, ensuring system availability, compliance, and optimized performance aligned with database best practices.</p>
<p> •	Collaborated on backend logic to support secure API communication, backup planning, and scalable data storage, closely reflecting core DBA responsibilities. </p>

   </div>
        <div className="project-card">
          <h3>Smart Health Hub</h3>
          <p> •	Developed and optimized MySQL database schemas for managing appointments, prescriptions, and health records, ensuring 100% data accuracy and reducing manual effort by 40%. </p>
<p> •	Real-time chat and interactive healthcare services, including a symptom checker and e-prescriptions, enhanced doctor-patient communication by 60% and reduced response time to queries by 50%.</p>

        </div>
        <div className="project-card">
          <h3>Revolutionizing Urban Mobility </h3>
          <p>•	An optimization framework for public transportation was created using Genetic Algorithms, and K-means Clustering, leading to a 20% improvement in scheduling efficiency and a 25% reduction in wait times.</p>
<p> •	Real-world geospatial data was utilized for accurate transport analysis and simulation, resulting in lower operational costs and improved passenger reliability.</p>

     </div>
      </div>
    </section>
  );
}

export default Projects;
