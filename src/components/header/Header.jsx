import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import './header.css' 

export default function Header() {
  return (
    <header>

      

		<div class="wrapper">
      
      <div className='profile-picture'>
                <div className='profile-picture-background'></div>
      </div>
			<div class="logo">Relieve Ingenieria SAS</div>
      
			
			<nav>
      
				<a href="#">Inicio</a>
				<a href="#">Servicios</a>
				<a href="#">Proyectos</a>
				<a href="#">Contacto</a>
			</nav>
		</div>
	</header>
  )
}
