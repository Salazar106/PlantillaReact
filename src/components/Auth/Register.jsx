import React from "react";
import "./register.css";

import { Formik } from "formik";
import { useState } from "react";

const SingUp =()=> {
    const [failPassword, setFailPassword] =useState();
    const [formulario, setFormulario]     = useState({
      firtsName      :'',
      LastName       :'',
      adress         :'',
      password       :'',
      confirmPassword:'',
      cellPhone      :'',
    });

    
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormulario({ ...formulario, [name]: value });
    };


  const handleNumeroChange = (event) => {
    // Eliminar caracteres no numéricos usando una expresión regular
    const nuevoNumero = event.target.value.replace(/[^0-9]/g, '');
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      cellPhone: nuevoNumero,
    }));
   
  };
  const handleSubmit = (event) => {
    passwordValidate();
    event.preventDefault();
    // Puedes realizar acciones con los datos del formulario aquí
    console.log(formulario);
  };

  const passwordValidate = () => {
    if (formulario.password !== formulario.confirmPassword) {
      setFailPassword('Las contraseñas no coinciden');
    } else {
      setFailPassword('');
    }
  };


  return (
    <>
      <div className="container">
        <div className="card">
          <div className="">
            <div className="information">
              <h2>Sing Up</h2>
              <form onSubmit={handleSubmit}>
                <input className="inputs" name="firtsName" value={formulario.firtsName} onChange={handleInputChange} placeholder="First name" type="text"></input>
                <input className="inputs" name="LastName" value={formulario.LastName} onChange={handleInputChange} placeholder="Last name"type="text"></input>
                <input className="inputs" name="adress" value={formulario.adress} onChange={handleInputChange} placeholder="Adress" type="text"></input>
                <input className="inputs" name="cellPhone" value={formulario.cellPhone} onChange={(event)=>{handleInputChange,handleNumeroChange}}  placeholder="Cell Phone" type="text"></input>
                <input className="inputs" name="password" value={formulario.password} onChange={handleInputChange} placeholder="Password" type="text"></input>
                <input className="inputs" name="confirmPassword" value={formulario.confirmPassword} onChange={handleInputChange} placeholder="Confirm password"  type="password"></input>
                <br />
                <button className="btn-auht" type="submit">Sing up</button>
                <br />
              </form>
              {failPassword && <p style={{ color: 'red' }}>{error}</p>}


              <div className="social">
                <span>Sing Up with:</span>
                <br />
                <button className="Goggle">
                  <i className="fa-brands fa-google fa-xl"></i>
                </button>
                <button className="facebook">
                  <i className="fa-brands fa-facebook fa-xl"></i>
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
