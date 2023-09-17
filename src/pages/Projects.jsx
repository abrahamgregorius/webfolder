import React from 'react'
import '../index.css'
import '../css/style.css'
import Navbar from "../components/Navbar";
import Section from '../components/Section';

function Projects() {
    return(
        <>
            <Navbar></Navbar>
            <Section>
                <div className="container container-home">
                    <h1>here are my projects</h1>
                </div>
            </Section>
        </>
    )
}

export default Projects