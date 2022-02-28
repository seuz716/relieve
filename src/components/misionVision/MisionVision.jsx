import React from 'react'
import Attention from '../attention/Attention'
import './MisionVision.css'

export default function Misionvision() {
    return (
        <>
        <div className="contenedorMisionVision" >
            <h1 className="HMisionVision">MISION</h1>
            <p className="PMisionvision">
                Nulla quis eu aliqua elit cillum enim. Officia minim consectetur esse aliqua exercitation ex. Elit nostrud do velit tempor. Do nostrud nostrud aliqua ea tempor nulla esse anim. Est ipsum dolor anim deserunt dolor consectetur aute nisi..
            </p>  
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
                    <p className="PMisionvision"></p>
                 </div>   
            </div>
            
        <div className="contenedorMisionVision" >
            <h2 className="HMisionVision">VISION</h2>
            <p className="PMisionvision">
                Seremos la compañía líder en la región y en el país en la oferta de servicios y productos xxxxxx.
            </p>  
        </div>
        <Attention />
        </>
    )
}