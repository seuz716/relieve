import React from 'react'
import './Attention.css'

export default function Attention() {
    return (
        <div className="container__attention">
            <h1 className="title__attention">PUNTOS DE ATENCION</h1>
            <div className="attention">
                <div className="attention__point">
                    <h2>Cali</h2>
                    <img src="https://live.staticflickr.com/3355/3565906316_860c307bd4_b.jpg" alt="" class="rounded-circle"/>
                </div>
                <div className="attention__point">
                    <h2>Medellín</h2>
                    <img src="https://st2.depositphotos.com/6922808/9719/i/600/depositphotos_97197562-stock-photo-medellin-colombia-july-28-2015.jpg" alt="" class="rounded-circle"/>
                </div>
                <div className="attention__point">
                    <h2><Pereira></Pereira></h2>
                    <img src="https://i0.wp.com/blog.soyrappi.com/wp-content/uploads/2020/01/Pereira.jpg?fit=900%2C605&ssl=1" alt="" class="rounded-circle"/>
                </div>
                <div className="attention__point">
                    <h2>Bogotá</h2>
                    <img src="https://vistapointe.net/images/bogot%C3%A1-7.jpg" alt="" class="rounded-circle"/>
                </div>
                <div className="attention__point">
                    <h2>Armenia</h2>
                    <img src="https://static.wixstatic.com/media/0102bb_de7c0e4eec77440e81714b5ffeada1cd~mv2.jpg/v1/fill/w_558,h_425,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0102bb_de7c0e4eec77440e81714b5ffeada1cd~mv2.jpg"/>
                </div>
            </div>
        </div>
    )
}
