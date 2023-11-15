import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="container">
      
        
        <div className="card">
          <div className="left">
          

            <div className="information">
                <h2>SING IN</h2>
            <input
              className="inputs"
              placeholder="Username"
              type="text"
            ></input>
            <input
              className="inputs"
              placeholder="Password"
              type="password"
            ></input><br />

            <span>Forgot your password?</span><br />

            <button className="btn-auht">Login</button><br />

            <div className="social">
                <span>Sing in with:</span><br />
            <button className="Goggle"><i className="fa-brands fa-google fa-xl"></i></button>
            <button className="facebook"><i className="fa-brands fa-facebook fa-xl"></i></button>
            </div>
              <a href="">sing up <i className="fa-regular fa-right-to-line" style={{color:"#0056d6"}}></i></a>
            
            </div>
           
          </div>
          <div className="rigth">
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/564/564399.png" alt="" />
            <h1>Welcome to xxxxx</h1>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Login;
