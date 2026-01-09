


import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/Login");
    setOpen(false);
  };

  return (
    <nav className="nav">
      <h1 className="logo">
        JOB<span>FIND</span>
      </h1>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={`menu ${open ? "active" : ""}`}>
        <li onClick={() => setOpen(false)}>
          <Link className="job" to="/Home">Home</Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <Link className="job" to="/Job">Jobs</Link>
        </li>
        <li onClick={() => setOpen(false)}>
          <Link className="job" to="/Browse">Browse</Link>
        </li>
      </ul>
      {user ? (
        <div className="user-box">
          <span>👤 {user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button className="login" onClick={() => navigate("/Login")}>
          Login
        </button>
      )}
    </nav>
  );
}

export default Navbar;
