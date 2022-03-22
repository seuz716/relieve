import React from 'react'
import './CustomerInversion.css'
import { Link } from 'react-router-dom'
import familia from '../../images/cocina2.png'
import finca from '../../images/vistaVentana.png'
import farol from '../../images/sala2.png'
import panoramica from '../../images/panoramica.png'
import edificio from '../../images/edificio.png'
import edificio1 from '../../images/panoramica1.png'

export default function CustomerInversion() {
    return (
        <div className="CustomerInversion">
              <div className="ContenedorBtn">
                <img className="Customer" src={edificio} alt="" width="100%" /> <br />
                <Link class="btnInversion" to="dashboard">Conoce Más</Link>
              </div> 
              
              <div className="ContenedorBtn">
                <img className="Customer" src={edificio1} alt="" width="100%" /> <br /> 
                <Link class="btnInversion" to="conocenos">Conoce Más</Link>
              </div>  
            
        </div>
    )
}



