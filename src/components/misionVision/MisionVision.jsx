import React from 'react'
import Attention from '../attention/Attention'
import './MisionVision.css'

export default function Misionvision() {
    return (
        <>
        <div className="contenedorMisionVision" >
            <h1 className="HMisionVision">MISION</h1>
            <p className="PMisionvision">
               Planear y desarrollar proyectos constructivos con valor social y ambiental, identificado por altos estandares de diseño y calidad ofreciendo siempre las mejores alternativas segun las necesidades propias de nuestros clientes   </p>  
        </div>
            
            <h2 className="title">NUESTRO EQUIPO</h2>

            <div className="Nuestroequipo">
                <div className="empleado1">
                    <img className="imgEquipo" src="https://www.editorialcaliope.com/wp-content/uploads/2016/12/silueta-hombre.png" alt="Foto1" />
                    <p className="PMisionvision">Gerente</p>
                </div>
                <div className="empleado1">
                     <img className="imgEquipo" src="https://www.editorialcaliope.com/wp-content/uploads/2016/12/silueta-hombre.png" alt="Foto2" />
                     <p className="PMisionvision">Director XXXXX </p>
                </div>
                 <div className="empleado1">
                    <img className="imgEquipo" src="https://image.flaticon.com/icons/png/512/56/56863.png" alt="Foto3" />
                    <p className="PMisionvision">Directora XXXXXXXX</p>
                </div>
                <div className="empleado1">
                    <img className="imgEquipo" src="https://www.editorialcaliope.com/wp-content/uploads/2016/12/silueta-hombre.png" alt="Foto4" />
                    <p className="PMisionvision">Especialista XXXXX</p>
                 </div>
                 <div className="empleado1">
                    <img className="imgEquipo" src="https://www.editorialcaliope.com/wp-content/uploads/2016/12/silueta-hombre.png" alt="Foto5" />
                    <p className="PMisionvision">Especialista XXXXX</p>
                 </div>   
            </div>
            
        <div className="contenedorMisionVision" >
            <h2 className="HMisionVision">VISION</h2>
            <p className="PMisionvision">
            Para el 2040 seremos una compañia consolidada con aliados estratégicos y con presencia en el mercado nacional, teniendo además participación en la formanción de innovación del sector constructivo del pais.
            </p>  
        </div>
        <Attention />
        </>
    )
}