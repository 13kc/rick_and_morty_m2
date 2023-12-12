import React, { useState } from 'react';
import validation from '../../utils/validation';
import './Form.css';
const banner ="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png";


export default function Form({login}){

    const [userData, setUserData] = useState({
        email:"",
        password:""
    });
    const [errors, setErrors] = useState({
        email:"Ingrese su email",
        password:"Ingrese su password"
    });

    const handleChange = (event) => {
       const { name, value } = event.target;
       setUserData({
        ...userData,
        [name]: value
       });
       setErrors(validation({
        ...userData,
        [name]: value
       }));
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <div>
            <img 
            src={banner}  
            style= {{width:"700px", marginLeft:"50px"}}  
            alt="" 
            />
            
            <form className="form-container"  onSubmit= {handleSubmit}> 

                <label className='label-email'>Email:</label>
                <input className='form-input'
                    type="text"
                    key="email"
                    name= "email"
                    value={userData.email}
                    placeholder="Ingresar email..."
                    onChange={handleChange} 
                    />
                
                <p>{errors.email ? errors.email: null}</p>

                <label className='label-password'>Password:</label>
                <input className='form-input2'
                   type="password"
                   key= "password"
                   name="password"
                   value={userData.password} 
                   placeholder="Ingresar contraseña..."
                   onChange={handleChange}
                />
                <p>{errors.password && errors.password}</p>
            

                <button className='form-buttonSubmit'
                  type='submit'
                  >Enviar</button>

            </form>
        </div>
    )
}