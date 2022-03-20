import React from 'react'
import './title.css' 

export default function Title(props) {
    return (
        <div className="navbar-expand-lg navbar-light p-5" style={{background:'#EAEDED '}}>
            <h1>{props.title}</h1>
        </div>
    )
}
