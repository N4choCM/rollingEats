import React from 'react'

import {useState} from 'react';
import logo from "../assets/logo.png"
import "../css/register.css";


const RegisterScreen = () => {
    
    const [FormValues, setFormValues]=useState({
        NombreDeUsuario:``,
        email:``,
        Password:``,
        ConfimarPassword:``

    })
   const [Message, setMessage] =useState(false)


    const handleChange=(e)=>{
        setMessage(false)
        setFormValues({
            ...FormValues,
            [e.target.name]:e.target.value
        })
    }

 const handleSubmit=(e)=>{
    e.preventDefault;
    if(!FormValues.email){
        setMessage(true)
    }
 }



    return (
        <div>
            <div className='container container-login'>
                <div className='row px-2'>
                    <div className=' card-login'>
                    <div>
                            <img src={logo}/>
                        </div>
                        <h3 className='text-center mt-2 text-white'>
                            <span>
                            <i className="fa fa-user-circle" aria-hidden="true"></i>{" "}
                            </span>
                            Registrate
                        </h3>
                        <form onSubmit={handleSubmit} >
                            <div className='mt-4'>
                                <label className='fw-bold text-white'>
                                    Nombre de usuario
                                </label>
                                <input type="text"
                                 className='form-control'
                                 name="NombreDeUsuario"
                                 value={FormValues.NombreDeUsuario}
                                 onChange={handleChange}
                                 
                                 />
                                {
                                Message &&(

                                        <p className='text-danger m-0'> faltan datos en el campo</p>
                                    )
                                }
                            </div>
                            <div className='mt-3'>
                                <label className='fw-bold text-white'>
                                    Correo
                                </label>
                                <input type="email"
                                 className='form-control'
                                 name='email'
                                 value={FormValues.email}
                                onChange={handleChange}
                                 placeholder='@hotmail.com'
                                 />

                                 {

                                    Message &&(

                                    <p className='text-danger m-0'> faltan datos en el campo</p>
                                    )
                                 }

                            </div>
                           
                            <div className='mt-3 text-white'>
                                <label className='fw-bold'>
                                    Contraseña
                                </label>
                                <input type="Password"
                                name='Password'
                                onChange={handleChange}
                                 className='form-control'
                                 value={FormValues.Password}
                                 
                                 />
                                {
                                Message &&(

                                        <p className='text-danger m-0'> faltan datos en el campo</p>
                                    )
                                }
                            </div>
                            <div className='mt-3 text-white'>
                                <label className='fw-bold'>
                                    Confirmar contraseña
                                </label>
                                <input type="password"
                                 className='form-control'
                                 name='ConfimarPassword'
                                 onChange={handleChange}
                                 value={FormValues.ConfimarPassword}
                                
                                 />
                            {
                                Message &&(

                                        <p className='text-danger m-0'> faltan datos en el campo</p>
                                    )
                                }
                            </div>

                            <div className='mt-3 d-grid'>
                                <button className='btn btn-dark'>
                                    Registrarse
                                </button>
                            </div>

                            <div className='mt-3 text-white'>
                                <p>¿Ya eres miembro?
                                </p>
                                <div className='text-center'>
                                    <a href=" ">Inicia tu seccion</a>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
    
}

 

export default RegisterScreen;
