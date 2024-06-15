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
            <Hero title={"Projects"} description={"recent projects that i've been working on"}></Hero>
            <div className="container container-project">
                <div className=" w-full mx-auto my-0 grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {/* <Card title="" link="https://github.com/abrahamgregorius/" description="" src={""}></Card> */}
                    <Card title="TenizenMart" description="All-in-one web app for school transactions" src={""}></Card>
                    <Card title="JFLS Hub v3" description="Jabar Future Leaders Scholarship portal" src={""}></Card>
                    <Card title="SalesPoint" link="https://github.com/abrahamgregorius/salespoint" description="Compact web-based POS application" src={""}></Card>
                    <Card title="The Borobudur" link="https://github.com/Connexsoft-Team/the-borobudur" description="Interactive site about Borobudur Temple" src={""}></Card>
                    <Card title="Kryptonim" link="https://github.com/abrahamgregorius/kryptonim" description="Modern and minimalistic landing page" src={kryptonimimg}></Card>
                    <Card title="Fintech Web App" link="https://github.com/abrahamgregorius/usk-web" description="BNSP Competency Certification Test - Web" src={kryptonimimg}></Card>
                    <Card title="Fintech Mobile App" link="https://github.com/abrahamgregorius/usk-mobile" description="BNSP Competency Certification Test - Mobile " src={kryptonimimg}></Card>
                    <Card title="Liga SMK Slicing" link="https://github.com/abrahamgregorius/ligasmkslicing" description="Slicing test for Liga SMK Competition" src={""}></Card>
                    <Card title="Laisindo" link="https://laisindo.com" description="Laisindo Autoparts company profile website" src={laisinimg}></Card>
                    <Card title="Mauvin" link="https://github.com/abrahamgregorius/mauvin" description="Theme for a Wordpress-based website " src={tenizenimg}></Card>
                    <Card title="CSD" description="Customer Service Administrator Dashboard" src={csdimg}></Card>
                    <Card title="ClickCart" description="Template for an online shop website" src={reactshopimg}></Card>
                    <Card title="ExpenTrack" link="https://github.com/abrahamgregorius/expentrack" description="Website for tracking personal expenses" src={expentrackimg}></Card>
                    <Card title="GmailBot" link="https://github.com/abrahamgregorius/gmailgenerator" description="A bot to generate Gmail accounts by using UIAutomator" src={gmailbotimg}></Card>
                    <Card title="ShopeeFSBot" description="Shopee Flash Sale autoclicker bot by using UIAutomator" src={shopeeimg}></Card>
                    <Card title="RecipeCrate App" description="Result of LKS DKI Jakarta 2023 server side module" src={""}></Card>
                    <Card title="RecipeCrate App" description="Result of LKS DKI Jakarta 2023 server side module" src={""}></Card>
                    <Card title="Vaccinify App" description="Result of LKSN server side module training" src={""}></Card>
                    <Card title="Job Vacancy App" description="Result of LKSN server side module training" src={""}></Card>
                    <Card title="Head Soccer Game" description="Result of LKS Nasional 2023 client side module" src={""}></Card>
                    <Card title="PvZ Game" link={"https://github.com/abrahamgregorius/seleknaspvz"} description="Result of LKS DKI Jakarta 2023 client side module" src={""}></Card>
                    <Card title="Snake Game" link={"https://github.com/abrahamgregorius/snakegame"} description="Result of LKSN client side module training" src={""}></Card>
                    <Card title="Othello Game" description="Result of LKSN client side module training" src={othelloimg}></Card>
                    <Card title="TeleAuto" link="https://github.com/abrahamgregorius/telegramAutomation" description="Automating Telegram tasks and functions with a bot" src={whautoimg}></Card>
                    <Card title="WhatsAuto" link="https://github.com/abrahamgregorius/whatsappAutomation" description="Automating Whatsapp tasks and functions with a bot" src={whautoimg}></Card>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Projects