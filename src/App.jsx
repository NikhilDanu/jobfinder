import { Routes, Route } from "react-router-dom";
import "./app.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import Login from "./pages/Login";
import Account from "./pages/Createaccount";
import SavedJobs from "./pages/SavedJobs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/job" element={<JobDetails />} />
        <Route path="/browse" element={<SavedJobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
