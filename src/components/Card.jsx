import React from "react"
import '../assets/laisin.png'
import githubimg from '../assets/github.png'


function Card({title, description, src, link, tech}) {
    return(
        <>
            <div className="card select-none bg-white bg-opacity-5 backdrop-blur-lg rounded p-3">
                <a target={link ? "_blank" : ""} href={link ? link : "#"}>
                    <div className="project-head">
                        <img className="h-[0px] w-full rounded object-top object-cover" src={src} alt="" />
                    </div>
                    <div className="project-body min-h-[100px] relative px-2 py-3 rounded-bl rounded-br">
                        <p className="font-bold text-xl">{title}</p>
                        <p className="text-sm tracking-wide font-light">{description}</p>
                        <div className="absolute right-0 bottom-0">
                            {link ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="currentColor" d="M203.94 76.16A55.73 55.73 0 0 0 199.46 30a4 4 0 0 0-3.46-2a55.78 55.78 0 0 0-46 24h-28a55.78 55.78 0 0 0-46-24a4 4 0 0 0-3.46 2a55.73 55.73 0 0 0-4.48 46.16A53.78 53.78 0 0 0 60 104v8a52.06 52.06 0 0 0 52 52h1.41A36 36 0 0 0 100 192v12H72a28 28 0 0 1-28-28a36 36 0 0 0-36-36a4 4 0 0 0 0 8a28 28 0 0 1 28 28a36 36 0 0 0 36 36h28v20a4 4 0 0 0 8 0v-40a28 28 0 0 1 56 0v40a4 4 0 0 0 8 0v-40a36 36 0 0 0-13.41-28H160a52.06 52.06 0 0 0 52-52v-8a53.78 53.78 0 0 0-8.06-27.84M204 112a44.05 44.05 0 0 1-44 44h-48a44.05 44.05 0 0 1-44-44v-8a45.76 45.76 0 0 1 7.71-24.89a4 4 0 0 0 .53-3.84a47.82 47.82 0 0 1 2.1-39.21a47.8 47.8 0 0 1 38.12 22.1a4 4 0 0 0 3.37 1.84h32.34a4 4 0 0 0 3.37-1.84a47.8 47.8 0 0 1 38.12-22.1a47.82 47.82 0 0 1 2.1 39.21a4 4 0 0 0 .53 3.83A45.85 45.85 0 0 1 204 104Z"/></svg>
                            )}
                        </div>
                        {/* <div className="absolute left-2 bottom-1">
                            <span className="text-sm">{tech}</span>
                                {tech.forEach((item) => {
                                    (
                                    )
                                })}
                        </div> */}


                    </div>

                </a>
            </div>
        </>
    )
}

export default Card