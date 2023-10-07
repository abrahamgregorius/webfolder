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
        <>
            <Navbar></Navbar>
            <Hero title={"Projects"} description={"recent projects that i've been working for"}></Hero>
            <Section>
                <div className="container container-project">
                    <div className="card-section flex-wrap ">
                        <Card title="Kryptonim" link="https://github.com/abrahamgregorius/kryptonim" description="Modern and minimalistic landing page" src={kryptonimimg}></Card>
                        <Card title="Laisindo" link="https://laisindo.com" description="Laisindo Autoparts company profile website" src={laisinimg}></Card>
                        <Card title="Mauvin" description="Theme for a Wordpress-based website " src={tenizenimg}></Card>
                        <Card title="CSD" description="Customer Service Administrator Dashboard" src={csdimg}></Card>
                        <Card title="ClickCart" description="Template for an online shop website" src={reactshopimg}></Card>
                        <Card title="ExpenTrack" link="https://github.com/abrahamgregorius/expentrack" description="Website for tracking personal expenses" src={expentrackimg}></Card>
                        <Card title="GmailBot" link="https://github.com/abrahamgregorius/gmailgenerator" description="A bot to generate Gmail accounts by using UIAutomator" src={gmailbotimg}></Card>
                        <Card title="ShopeeFSBot" description="Shopee Flash Sale autoclicker bot by using UIAutomator" src={shopeeimg}></Card>
                        <Card title="Othello Game" description="Result of LKSN client side module training" src={othelloimg}></Card>
                        <Card title="WhatsAuto" link="https://github.com/abrahamgregorius/whatsappAutomation" description="Automating Whatsapp tasks and functions with a bot" src={whautoimg}></Card>
                    </div>
                </div>
            </Section>
            <Footer></Footer>
        </>
    )
}

export default Projects