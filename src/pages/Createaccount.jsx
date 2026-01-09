import { useNavigate } from "react-router-dom";
import "../style/Createaccount.css";
import { useState } from "react";
function Account(){
  const [name , setName] = useState("");
  const [lastname ,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const[password , setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlesignup =() =>{
    if(!name || !lastname || !email || !password || !confirmPassword){
      alert("all fiel are required");
    }
    if(password !== confirmPassword){
      alert("password do not match");
    }

    const userdata ={
      name,
      lastname,
      email,
      password,
      setPassword,
    };
     localStorage.setItem("user",JSON.stringify(userdata));
     alert("Account created successfully!");
      navigate("/login");
  }

  
  return(
     <div className="account-container">
      <div className="account-form">
        <h2>Create Account</h2>
        <h3>It's quick and easy</h3>

        <div className="form-group">
          <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter your Name" />
        </div>

        <div className="form-group">
          <input onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Enter your Last Name" />
        </div>

        <div className="form-group">
          <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Your Email" />
        </div>

        <div className="form-group">
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
        </div>

        <div className="form-group">
          <input onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
        </div>

        <div className="form-group">
          <button className="signup-btn" onClick={handlesignup}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
export default Account;