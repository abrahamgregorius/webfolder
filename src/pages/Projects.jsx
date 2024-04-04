import React from 'react'
import '../index.css'
import '../css/style.css'
import Navbar from "../components/Navbar";
import Section from '../components/Section';
import Hero from '../components/Hero';
import Card from '../components/Card';
import laisinimg from '../assets/laisin.png';
import tenizenimg from '../assets/tenizencode.png'
import csdimg from '../assets/csd.png'
import reactshopimg from '../assets/reactshop.png'
import expentrackimg from '../assets/expentrack.png'
import gmailbotimg from '../assets/gmailbot.png'
import shopeeimg from '../assets/shopee.png'
import othelloimg from '../assets/othello.png'
import whautoimg from '../assets/whauto.png'
import kryptonimimg from '../assets/kryptonim.png'
import Footer from '../components/Footer';


function Projects() {
    return(
        <div className='text-white container mx-auto my-0 p-4 w-full max-w-[840px]'>
            <Navbar></Navbar>
            <Hero title={"Projects"} description={"recent projects that i've been working for"}></Hero>
            <div className="container container-project">
                <div className=" w-full mx-auto my-0 grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    <Card tech={"Vanilla"} title="Kryptonim" link="https://github.com/abrahamgregorius/kryptonim" description="Modern and minimalistic landing page" src={kryptonimimg}></Card>
                    <Card tech={"Laravel"} title="Laisindo" link="https://laisindo.com" description="Laisindo Autoparts company profile website" src={laisinimg}></Card>
                    <Card tech={"Wordpress"} title="Mauvin" link="https://github.com/abrahamgregorius/mauvin" description="Theme for a Wordpress-based website " src={tenizenimg}></Card>
                    <Card tech={"Laravel"} title="CSD" description="Customer Service Administrator Dashboard" src={csdimg}></Card>
                    <Card tech={"Wordpress"} title="ClickCart" description="Template for an online shop website" src={reactshopimg}></Card>
                    <Card tech={"Laravel"} title="ExpenTrack" link="https://github.com/abrahamgregorius/expentrack" description="Website for tracking personal expenses" src={expentrackimg}></Card>
                    <Card tech={"Python"} title="GmailBot" link="https://github.com/abrahamgregorius/gmailgenerator" description="A bot to generate Gmail accounts by using UIAutomator" src={gmailbotimg}></Card>
                    <Card tech={"Python"} title="ShopeeFSBot" description="Shopee Flash Sale autoclicker bot by using UIAutomator" src={shopeeimg}></Card>
                    <Card tech={"JavaScript"} title="Othello Game" description="Result of LKSN client side module training" src={othelloimg}></Card>
                    <Card tech={"Python"} title="WhatsAuto" link="https://github.com/abrahamgregorius/whatsappAutomation" description="Automating Whatsapp tasks and functions with a bot" src={whautoimg}></Card>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Projects