import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import "./app.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home.jsx"; 
import JobDetails from "./pages/JobDetails.jsx"; 
import Login from "./pages/Login.jsx";
import Account from "./pages/Createaccount.jsx";
import SavedJobs from "./pages/SavedJobs.jsx"; 

function App() { 
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home/>} /> 
        <Route path="/job" element={<JobDetails/>} />
        <Route path="/browse" element={<SavedJobs />} /> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Account />} />
      </Routes>
    </BrowserRouter> 
  ); 
}

export default App;
