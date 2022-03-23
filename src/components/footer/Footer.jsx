import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGem, faHome, faEnvelope, faPhone, faPrint} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faGoogle, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './footer.css' 

export default function Footer() {
  // Se extrae la fecha actual y el año
  const date = new Date();
  const year = date.getFullYear();

    return (
      
        <div className="container-footer">
              <footer className="text-center text-lg-start text-muted" >
                <section
                  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                  <div className="me-6" >
                    <h3>Conectate a nuestras redes sociales:</h3>
                  </div>
                  <div>
                    <a href="a" className="me-4 ">
                      <FontAwesomeIcon icon={faFacebook} />  
                    </a>
                    <a href="v" className="me-4 ">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="c" className="me-4 ">
                    <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="d" className="me-4 ">
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="e" className="me-4 ">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </section>

                <section className="contenedo">
                  <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                      <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h4 className="text mb-4" style={{color:'#E7451C'}}>
                        <FontAwesomeIcon icon={faGem}/>
                          <i className="fas fa-gem me-2"></i >Relieve Ingenieria SAS
                        </h4>
                        <p style={{color:'#606923'}}>
                          Here you can use rows and columns to organize your footer content. Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit.
                        </p>
                      </div>

                      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h4 className="text mb-4" style={{color:'#E7451C'}}>
                          Categorias
                        </h4>
                        <p> 
                          <a href="proyectos" className="text" style={{color:'#606923'}}>Proyectos</a>
                        </p>
                        <p>
                          <a href="misionvision" className="text" style={{color:'#606923'}}>Nosotros</a>
                        </p>
                        <p>
                          <a href="servicios" className="text" style={{color:'#606923'}} >Consultenos</a>
                        </p>
                        <p>
                          <a href="conocenos" className="text" style={{color:'#606923'}} >Obras </a>
                        </p>
                        <nav>

				                   <a className="botonAbout" href="/">Inicio</a>
			            			</nav>
                     </div>

              {/*         <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">
                          Enlaces utiles
                        </h6>
                        <p>
                          <a href="#!" className="text-reset">Crear cuenta</a>
                        </p>
                        <p>
                          <a href="#!" className="text-reset">Configuraciones</a>
                        </p>
                        <p>
                          <a href="#!" className="text-reset">Favoritos</a>
                        </p>
                        <p>
                          <a href="#!" className="text-reset">Ayuda</a>
                        </p>
                      </div> */}

                      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h4 className="text mb-4" style={{color:'#E7451C'}}>
                          Contacto
                        </h4 >
                        <p className="text" style={{color:'#606923'}}><FontAwesomeIcon icon={faHome}/>
                          Relieve Ingeniería SAS</p>
                        <p className="text" style={{color:'#606923'}}>
                          <FontAwesomeIcon icon={faEnvelope}/>
                          info@example.com
                        </p>
                        <p className="text" style={{color:'#606923'}}>
                          <FontAwesomeIcon icon={faPhone}/>
                          + 01 234 567 88</p>
                        <p className="text" style={{color:'#606923'}}><FontAwesomeIcon icon={faPrint}/> + 01 234 567 89</p>
                      </div>
                    </div>

                  </div>
                </section>
                <div className="text" style={{color:'#606923'}}>
                  © {year} Copyright Relieve ingenieria SAS
                </div>

              </footer>
        </div>
    )
}
