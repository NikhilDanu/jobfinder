

import { useState, useEffect } from "react";
import "../style/Job.css";
import { useNavigate } from "react-router-dom";

function Job() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(5);
  const [search, setSearch] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/jobfinder/job.json");
      if (!response.ok) throw new Error("Failed to fetch jobs");

      const jsondata = await response.json();

      setData(jsondata);
      setFilteredJobs(jsondata);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);



  if (loading) return <p>Loading Jobs ...</p>;
  if (error) return <p>Error: {error}</p>;

  function handleSearch() {
    const filter = data.filter((item) =>
      item.jobTitle.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredJobs(filter);
    setVisible(5);
  }

  function saveJob(job) {
    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    const alreadySaved = savedJobs.find((item) => item.id === job.id);

    if (!alreadySaved) {
      savedJobs.push(job);
      localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
      alert("Job Saved");
    } else {
      alert("Job Already Saved");
    }
  }

  function handleApply() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please login first");
      navigate("/login");
    } else {
      alert("Applied successfully");
    }
  }

  return (
    <div className="job-page">
      <h1 className="page-title">Latest Jobs</h1>

      <div className="job-search">
        <input
          type="text"
          placeholder="Search job title or keyword"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="filters">
        <select>
          <option>Filter by Location</option>
          <option>Bangalore</option>
          <option>Delhi</option>
        </select>

        <select>
          <option>Filter by Company</option>
          <option>Google</option>
          <option>Microsoft</option>
        </select>

        <button
          className="clear-btn"
          onClick={() => {
            setFilteredJobs(data);
            setSearch("");
          }}
        >
          Clear Filters
        </button>
      </div>

      <div className="job-list">
        <ul>
          {filteredJobs.length === 0 ? (
            <p>No Job Found</p>
          ) : (
            filteredJobs.slice(0, visible).map((item, index) => (
              <li key={index}>
                <div className="job-card-left">
                  <img src={item.logo} alt={item.company} />
                </div>

                <div className="job-card-right">
                  <h2>{item.jobTitle}</h2>
                  <p className="company">
                    {item.company} - {item.location}
                  </p>
                  <p className="type">
                    {item.jobType} | {item.timePeriod}
                  </p>
                  <p className="description">{item.description}</p>
                </div>

                <button className="apply" onClick={handleApply}>
                  Apply job
                </button>

                <button className="Save-btn" onClick={() => saveJob(item)}>
                  ☆
                </button>
              </li>
            ))
          )}
        </ul>
      </div>

      {visible < filteredJobs.length && (
        <button
          className="load-more"
          onClick={() => setVisible(visible + 5)}
        >
          Show More Jobs
        </button>
      )}
    </div>
  );
}

export default Job;
