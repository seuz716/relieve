import React from 'react'
import { Link } from 'react-router-dom'
import familia from '../../images/cocina2.png'
import obra from '../../images/obra.jpg'
import logo from '../../images/logo.jpg'
import panoramica from '../../images/panoramica.png'
import edificio from '../../images/edificio.png'
import edificio1 from '../../images/panoramica1.png'
import mesa from '../../images/mesaTrabajo.jpg'
import './Properties.css'

export default function Properties() {
    return (
        <div className="fluid">
            <div className="cont">
                <div className="cont__img">
                    <img src={logo} className="rounded"  alt="Asesorias"/>
                    <Link type="button" className="btn btn-light bton" to="asesorias">Ver mas</Link>
                </div>
                <div className="cont__img">
                    <img src={mesa} className="rounded"  alt="Proyectos"/>
                    <Link type="button" className="btn btn-light bton" to="Proyectos">Ver mas</Link>
                </div>
                <div className="cont__img">
                    <img src={obra} className="rounded"  alt="Conocenos"/>
                    <Link type="button" className="btn btn-light bton" to="conocenos">Ver mas</Link>
                </div>
            </div>
            
        </div>
    )
}
