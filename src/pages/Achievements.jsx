import React from 'react'
import '../index.css'
import '../css/style.css'
import Section from '../components/Section'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function Achievements() {
    return(
        <div className='text-white container mx-auto my-0 p-4 w-full max-w-[840px]'>
            <Navbar></Navbar>
            <Hero title={"Achievements"} description={"some of my accolades"}></Hero>
            <Section className="content">
                {/* <div>hello world</div> */}
            </Section>
            <Footer></Footer>
        </div>
    )
}

export default Achievements