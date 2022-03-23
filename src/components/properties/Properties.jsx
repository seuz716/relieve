import React from 'react'
import { Link } from 'react-router-dom'
import familia from '../../images/cocina2.png'
import obra from '../../images/obra.jpg'
import logo from '../../images/logo.jpg'
import panoramica from '../../images/panoramica.png'
import edificio from '../../images/edificio.png'
import edificio1 from '../../images/panoramica1.png'
import mesa from '../../images/mesaTrabajo.jpg'
import casa1 from '../../images/casa1.jpg';
import ingenieros from '../../images/ingenieros.jpg';
import farol from '../../images/sala2.png'
import './Properties.css'

export default function Properties() {
    return (
        <div className="fluid">
            <div className="cont">
                <div className="cont__img">
                    <img src={ingenieros} className="rounded"  alt="Asesorias"/>
                    <Link type="button" className="btn btn-light bton" to="asesorias">Ver mas</Link>
                </div>
                <div className="cont__img">
                    <img src={casa1} className="rounded"  alt="Proyectos"/>
                    <Link type="button" className="btn btn-light bton" to="proyectos">Ver mas</Link>
                </div>
                <div className="cont__img">
                    <img src={obra} className="rounded"  alt="Conocenos"/>
                    <Link type="button" className="btn btn-light bton" to="conocenos">Ver mas</Link>
                </div>
            </div>
            
        </div>
    )
}
