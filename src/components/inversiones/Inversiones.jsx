import React from 'react'
import ContactForm from '../contactForm/ContactForm'
import './Inversions.css'
import sala from '../../images/sala.png'
import water from '../../images/piscina.png'
import cocina from '../../images/cocina1.png'
import salon from '../../images/sala3.png'
import cuarto from '../../images/cuarto.png'
import patio from '../../images/terraza.png'
import familia from '../../images/cocina2.png'
import finca from '../../images/vistaVentana.png'
import farol from '../../images/sala2.png'
import panoramica from '../../images/panoramica.png'
import edificio from '../../images/edificio.png'
import edificio1 from '../../images/panoramica1.png'

export default function Inversiones() {
    return (
    <div >
         <div>
           <img src={cuarto} className="d-block w-100" width="304" height="570" alt="Casas" />
         </div>
        <div className="separador"> <h1 className="titulo">Relieve <br/> Una inversión con calidad de vida</h1></div>
        <div >
            
            <p className="PqSomos">Para  nuestros clientes que buscan tener n una alternativa que les brinde calidad para ellos y toda su familia, Relieve Ingenieria SAS  satisface los requerimientos, técnicos.
            <p ><br />
            Voluptate aute aliquip exercitation laboris tempor laborum. Laboris elit aliqua incididunt dolor culpa. Sit in aliqua est ex Lorem Lorem deserunt consequat enim quis ullamco commodo laboris. Et laborum voluptate ad qui..</p>
            </p>
        </div>

      <div className="separador"> <h2 className="titulo">Nuestra empresa</h2></div>
        
      <div className="CustomerInversion">
              <div className="ContenedorParrafo">
                  <p className="PqSomos">Voluptate aute aliquip exercitation laboris tempor laborum. Laboris elit aliqua incididunt dolor culpa. Sit in aliqua est ex Lorem Lorem deserunt consequat enim quis ullamco commodo laboris.
                  Ademas de colegios,<br/> tiendas y cercanía aPine Island Marina.
				          </p> 
                  <p className="PqSomos">Voluptate aute aliquip exercitation laboris tempor laborum. Laboris elit aliqua incididunt dolor culpa. Sit in aliqua est ex Lorem Lorem deserunt consequat enim quis ullamco commodo laboris
                </p>
              </div>
        
              <div className="ContenedorCarrousel">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
               
             </div>
       
             <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={edificio1} className="d-block w-100" width="304" height="380" alt="Casas" />
                 <div className="carousel-caption d-none d-md-block">
                  <h5 className="texto-borde">Mejores ubicaciones</h5>
                  </div>
              </div>
            
          <div className="carousel-item">
                <img src={cocina} className="d-block w-100" width="304" height="380" alt="Apartamentos" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="texto-borde">Tranquilida y confianza</h5>
                </div>
           </div>
           <div className="carousel-item">
                <img src={edificio} className="d-block w-100" width="304" height="380" alt="Apartamentos" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="texto-borde">Propiedades a lo largo y ancho de las americas</h5>
                </div>
            </div>
           <div className="carousel-item">
                <img src={panoramica} className="d-block w-100" width="304" height="380" alt="Apartamentos" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="texto-borde">Inveriones con una gran seguridad de crecimiento</h5>
                  </div>
           </div>
           <div className="carousel-item">
                <img src={finca} className="d-block w-100" width="304" height="380" alt="Apartamentos" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="texto-borde">Amplias y hermosas ubicaciones</h5>
                </div>
           </div>
           <div className="carousel-item">
                <img src={salon} className="d-block w-100" width="304" height="380" alt="Apartamentos" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="texto-borde">Comprometidos con su comodidad</h5>
                </div>
           </div>
           <div className="carousel-item">
                <img src={sala} className="d-block w-100" width="304" height="380" alt="Apartamentos" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="texto-borde">Voluptate aute aliquip exercitation laboris tempor</h5>
                </div>
           </div>
           <div className="carousel-item">
                <img src={patio} className="d-block w-100" width="304" height="380" alt="Apartamentos" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="texto-borde">Voluptate aute aliquip exercitation laboris tempor </h5>
                </div>
           </div>
           <div className="carousel-item">
                <img src={familia} className="d-block w-100" width="304" height="380" alt="Apartamentos" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="texto-borde">La familia lo más importante </h5>
                </div>
           </div>
           <div className="carousel-item">
                <img src={farol} className="d-block w-100" width="304" height="350" alt="Apartamentos" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="texto-borde">Nos preocupamos por el medio ambiente</h5>
                </div>
           </div>
           <div className="carousel-item">
                <img src={water} className="d-block w-100" width="304" height="380" alt="Locales" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className="texto-borde">Voluptate aute aliquip exercitation laboris tempor</h5>
                </div>
            </div>
           
      </div>
              
                <button className="carousel-control-prev" type="button"   data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>    
       </div>  
            
    </div>
      <ContactForm />
 </div>

    )
}