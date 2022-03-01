import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
    return (
        <div className="contenedorAbout" >
            <h1 className="Qsomos">QUÍENES SOMOS</h1>
            <p className="PqSomos">Occaecat irure qui elit ad fugiat aute tempor nisi fugiat cillum. Proident consectetur consectetur qui mollit tempor deserunt labore est tempor. Qui est laborum cupidatat aute elit sunt culpa dolore consequat elit. Cupidatat pariatur qui do occaecat do dolor esse eiusmod consectetur est ea dolor.Aliqua proident irure velit irure proident. Commodo pariatur aute occaecat laboris duis culpa enim cillum ipsum aliqua officia dolor veniam. Cupidatat elit veniam consequat tempor labore ex consequat occaecat. Sit ut do eiusmod anim proident non eiusmod nostrud nostrud ex officia est consectetur do. Ad duis id pariatur cupidatat mollit cupidatat adipisicing aliqua officia. Duis ut eiusmod nulla ea in veniam fugiat magna aute ut laborum ad nisi labore. Est et labore voluptate cupidatat reprehenderit ipsum nulla est dolore ex proident cillum.</p>
            <Link className="botonAbout" to="MisionVision">CONOCE MÁS</Link> 
        </div>
    )
}




