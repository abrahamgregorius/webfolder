import React from "react"
import '../assets/laisin.png'


function Card({title, description, src}) {
    return(
        <>
            <div className="card shadow-xl">
                <img width={280} src={src} alt="" />
                <div className="card-body">
                    <div className="card-title"><h1>{title}</h1></div>
                    <div className="card-description">{description}</div>                            
                </div>
            </div>
        </>
    )
}

export default Card