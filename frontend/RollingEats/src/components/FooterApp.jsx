
import React from 'react'
import "../css/footer.css"
import logo from "../assets/logo.png"


const FooterApp = () => {
  return (

        <div className='footer mt-5'>
                <div className='wave'>
                    <div className='wave' id='wave1'></div>
                    <div className='wave' id='wave2'></div>
                    <div className='wave' id='wave3'></div>
                    <div className='wave' id='wave4'></div>

                </div>
                <div className='social_ico'>
                    <img src={logo} alt="" />

                </div>
                <ul className='social_ico'>
                        <li> <a href="#"> <i className="fa fa-youtube-play" aria-hidden="true"></i>  </a></li>
                        <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i> </a> </li>
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a> </li>
                        <li><a href="#"> <i className="fa fa-facebook-square" aria-hidden="true"></i> </a> </li>
                </ul>
                <div>
                </div>
                <ul className='menu'>
                    <li> <a href="#"> Inicio </a></li>
                    <li> <a href="#">Sucursales  </a></li>
                    <li> <a href="#"> Horarios </a></li>
                    <li> <a href="#"> terminos </a></li>
                    <li> <a href="#"> contactos </a></li>
                </ul>
                <p className='texto.p text-white'>@2023 derechos reservaods </p>
        </div>
  )
}

export default FooterApp

