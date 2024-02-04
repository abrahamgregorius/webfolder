import React from 'react'
import '../index.css'
import '../css/style.css'
import Section from '../components/Section'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function Achievements() {
    return(
        <>
            <Navbar></Navbar>
            <Hero title={"Achievements"} description={"some of my accolades"}></Hero>
            <Section className="content">
                {/* <div>hello world</div> */}
            </Section>
            <Footer></Footer>
        </>
    )
}

export default Achievements