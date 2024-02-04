import React from "react"
import '../assets/laisin.png'


function Card({title, description, src, link}) {
    return(
        <>
            <div className="card">
            <a target="_blank" href={link}>
                <img width={480} src={src} alt="" />
                <div className="card-body">
                    <div className="card-title"><h1>{title}</h1></div>
                    <div className="card-description">{description}</div>                            
                </div>
            </a>
            </div>
        </>
    )
}

export default Card