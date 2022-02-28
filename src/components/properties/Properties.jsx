import React from 'react'
import { Link } from 'react-router-dom'
import familia from '../../images/cocina2.png'
import finca from '../../images/vistaVentana.png'
import farol from '../../images/sala2.png'
import panoramica from '../../images/panoramica.png'
import edificio from '../../images/edificio.png'
import edificio1 from '../../images/panoramica1.png'
import './Properties.css'

export default function Properties() {
    return (
        <div className="fluid">
            <div className="cont">
                <div className="cont__img">
                    <img src={farol} className="rounded"  alt="Apartamentos"/>
                    <Link type="button" className="btn btn-light bton" to="apartamento">Ver mas</Link>
                </div>
                <div className="cont__img">
                    <img src={familia} className="rounded"  alt="Lotes"/>
                    <Link type="button" className="btn btn-light bton" to="lote">Ver mas</Link>
                </div>
                <div className="cont__img">
                    <img src={finca} className="rounded"  alt="Casas"/>
                    <Link type="button" className="btn btn-light bton" to="casa">Ver mas</Link>
                </div>
            </div>
            
        </div>
    )
}
