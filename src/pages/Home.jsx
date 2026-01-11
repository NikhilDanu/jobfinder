import { use, useState } from "react";
import "../style/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

   const recruiters = [
    { name: "Google", logo: "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" },
    { name: "Microsoft", logo: "https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png" },
    { name: "Amazon", logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" },
    { name: "Facebook", logo: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" },
    { name: "Apple", logo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" },
  ];

  return (
    <div className="home">
      <div className="badge">
        🏆 No.1 Job Hunt Website
      </div>
      <h1 className="title">
        Search Apply & <br />
        Get Your <span>Dream Job</span>
      </h1>

      <p className="subtitle">
        Start your hunt for the best, life-changing career opportunities
        from here in your selected areas conveniently and get hired quickly.
      </p>

      <div className="search-box">
        <p   onClick={() => navigate("/job")} >FIND JOBS</p>
      </div>

      <div className="categories">
        <h3>Categories</h3>
        <p>Explore our extensive job market.</p>

        <div className="category-list">
          <button className="arrow">←</button>

          <div className="category">Frontend Developer</div>
          <div className="category">Backend Developer</div>

          <button className="arrow">→</button>
        </div>

      </div>
     <div className="top-recruiters">
        <h3>Top Recruiters</h3>
        <p>Work with the best companies in the world.</p>

        <div className="recruiter-list">
          {recruiters.map((rec) => (
            <div key={rec.name} className="recruiter-card">
              <img src={rec.logo} alt={rec.name} />
              <p>{rec.name}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
      <p>© 2026 JobFinder. All Rights Reserved.</p>
    </footer>
    </div>
  );
}

export default Home;



