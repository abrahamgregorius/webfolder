import React from "react"

function Hero({title, description}) {
    return(
        <>
            <div className="hero-wrap">
                <div className="container-project">
                    <div className="hero">
                        <h1 className="hero-title font-mono">{title}</h1>
                        <p className="hero-description font-mono transition md:text-lg text-md">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero