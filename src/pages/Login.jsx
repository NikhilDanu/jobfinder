import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";
import { useState } from "react";

function Login() {
  const[email ,setEmail] = useState("");
  const[password ,setPassword] = useState("");
  
  const navigate = useNavigate();
  
  function handlelogin(){
    if(!email || !password){
      alert("all field are required");
      return;
    };

    const storedata = JSON.parse(localStorage.getItem("user"));

    if (!storedata) {
      alert("No account found. Please create an account.");
      navigate("/signup");
      return;
    }

    if(email === storedata.email && password === storedata.password){
      alert("login sucessful");
      localStorage.setItem("user", JSON.stringify(storedata));
      navigate("/Home");
    }else{
      alert("Wrong email or password");
    }
    }
  
  return (
    <div className="login-form">
      <h2>Login into JobFinder</h2>

      <div className="input">
        <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Enter email" />
      </div>

      <div className="password">
        <input  onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter your password" />
      </div>

      <div className="login-btn">
        <button onClick={handlelogin}>Login</button>
      </div>

      <p>--------- OR -----------</p>

      <div className="create-account">
        <Link className="signup-btn" to="/signup">
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default Login;
