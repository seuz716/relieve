import React from 'react'
import './title.css' 

export default function Title(props) {
    return (
        <div className="navbar-expand-lg navbar-light p-1   " style={{background:'#E10613'}}>
            <h2>{props.title}</h2>
        </div>
    )
}
