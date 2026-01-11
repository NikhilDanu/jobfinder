import { useState,useEffect } from "react";
import "../style/saved.css";

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(jobs);
  }, []);

  return (
    <div className="page">
    <div className="saved-jobs-container">
      <h2>Saved Jobs</h2>

      {savedJobs.length === 0 && <p>No saved jobs</p>}

      <ul className="saved-jobs-list">
        {savedJobs.map((job) => (
          <li key={job.id}>
            <img src={job.logo} alt={job.company} />
            <h2>{job.jobTitle} - {job.jobType}</h2>
            <h3>{job.description}</h3>
            <h4>{job.company} - {job.location}</h4>
            <p>{job.timePeriod}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
export default SavedJobs;
