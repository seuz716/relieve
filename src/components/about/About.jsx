import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
    return (
        <div className="contenedorAbout" >
            <h2 className="Qsomos">Quíenes Somos</h2>
            <p className="PqSomos">Somos una empresa que asumimos cada proyecto con responsabilidad y seriedad, para nosotros es
                de suma importancia construir con sentido social y ambiental, nuestra labor principal es brindar las
                mejores opciones teniendo en cuenta las necesidades y requerimientos propios, de cada cliente, con
                transparencia y plena satisfacción de haber superado las expectativas..</p>
            <Link className="botonAbout" to="MisionVision">Conoce Más</Link> 
        </div>
    )
}




