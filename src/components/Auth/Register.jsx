import React from "react";
import "./register.css";

import { Formik } from "formik";

function SingUp() {
  return (



    <>
      <div className="container">
        <div className="card">
          <div className="">
            <div className="information">
              <h2>SING UP</h2>
              <input className="inputs" placeholder="First name" type="text"></input>
              <input className="inputs" placeholder="Last name"type="text"></input>
              <input className="inputs" placeholder="Adress" type="text"></input>
              <input className="inputs" placeholder="Phone" type="text"></input>
              <input className="inputs" placeholder="Password" type="text"></input>
              <input className="inputs" placeholder="Confirm password"  type="password"></input>
              <br />

              <button className="btn-auht">Sing up</button>
              <br />

              <div className="social">
                <span>Sing Up with:</span>
                <br />
                <button className="Goggle">
                  <i class="fa-brands fa-google fa-xl"></i>
                </button>
                <button className="facebook">
                  <i class="fa-brands fa-facebook fa-xl"></i>
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default SingUp;
