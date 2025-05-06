import React from "react";
import "../index.css";
import "../css/style.css";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Hero from "../components/Hero";
import Card from "../components/Card";
import laisinimg from "../assets/laisin.png";
import tenizenimg from "../assets/tenizencode.png";
import csdimg from "../assets/csd.png";
import reactshopimg from "../assets/reactshop.png";
import expentrackimg from "../assets/expentrack.png";
import gmailbotimg from "../assets/gmailbot.png";
import shopeeimg from "../assets/shopee.png";
import othelloimg from "../assets/othello.png";
import whautoimg from "../assets/whauto.png";
import kryptonimimg from "../assets/kryptonim.png";
import Footer from "../components/Footer";

const data = [
    {
        title: "TenizenMart",
        description: "All-in-one web app for school transactions",
        link: "",
        src: "",
    },
    {
        title: "JFLS Hub v3",
        description: "Jabar Future Leaders Scholarship portal",
        link: "",
        src: "",
    },
    {
        title: "SalesPoint",
        description: "Compact web-based POS application",
        link: "https://github.com/abrahamgregorius/salespoint",
        src: "",
    },
    {
        title: "The Borobudur",
        description: "Interactive site about Borobudur Temple",
        link: "https://github.com/Connexsoft-Team/the-borobudur",
        src: "",
    },
    {
        title: "Kryptonim",
        description: "Modern and minimalistic landing page",
        link: "https://github.com/abrahamgregorius/kryptonim",
        src: {kryptonimimg},
    },
    {
        title: "Fintech Web App",
        description: "BNSP Competency Certification Test - Web",
        link: "https://github.com/abrahamgregorius/usk-web",
        src: "",
    },
    {
        title: "Fintech Mobile App",
        description: "BNSP Competency Certification Test - Mobile",
        link: "https://github.com/abrahamgregorius/usk-mobile",
        src: "",
    },
    {
        title: "Liga SMK Slicing",
        description: "Slicing test for Liga SMK Competition",
        link: "https://github.com/abrahamgregorius/ligasmkslicing",
        src: "",
    },
    {
        title: "Laisindo",
        description: "Laisindo Autoparts company profile website",
        link: "https://laisindo.com",
        src: {laisinimg},
    },
    {
        title: "Mauvin",
        description: "Theme for a Wordpress-based website",
        link: "https://github.com/abrahamgregorius/mauvin",
        src: {tenizenimg},
    },
    {
        title: "CSD",
        description: "Customer Service Administrator Dashboard",
        link: "",
        src: {csdimg},
    },
    {
        title: "ClickCart",
        description: "Template for an online shop website",
        link: "",
        src: {reactshopimg},
    },
    {
        title: "ExpenTrack",
        description: "Website for tracking personal expenses",
        link: "",
        src: {expentrackimg},
    },
    {
        title: "GmailBot",
        description: "A bot to generate Gmail accounts by using UIAutomator",
        link: "",
        src: {gmailbotimg},
    },
    {
        title: "ShopeeFSBot",
        description: "Shopee Flash Sale autoclicker bot by using UIAutomator",
        link: "",
        src: {shopeeimg},
    },
    {
        title: "RecipeCrate App",
        description: "Result of LKSN server side module training",
        link: "",
        src: "",
    },
    {
        title: "Vaccinify App",
        description: "Result of LKSN server side module training",
        link: "",
        src: "",
    },
    {
        title: "Job Vacancy App",
        description: "Result of LKSN server side module training",
        link: "",
        src: "",
    },
    {
        title: "Head Soccer Game",
        description: "Result of LKS Nasional 2023 client side module",
        link: "",
        src: "",
    },
    {
        title: "PvZ Game",
        description: "Result of LKS DKI Jakarta 2023 client side module",
        link: "https://github.com/abrahamgregorius/seleknaspvz",
        src: "",
    },
    {
        title: "Snake Game",
        description: "Result of LKSN client side module training",
        link: "https://github.com/abrahamgregorius/snakegame",
        src: "",
    },
    {
        title: "Othello Game",
        description: "",
        link: "",
        src: {othelloimg},
    },
    {
        title: "TeleAuto",
        description: "Automating Telegram tasks and functions with a bot",
        link: "https://github.com/abrahamgregorius/telegramAutomation",
        src: {whautoimg},
    },
    {
        title: "WhatsAuto",
        description: "Automating Whatsapp tasks and functions with a bot",
        link: "https://github.com/abrahamgregorius/whatsappAutomation",
        src: {whautoimg},
    },
];

function Projects() {
    return (
        <div className="text-white container mx-auto my-0 p-4 w-full max-w-[840px]">
            <Navbar></Navbar>
            <Hero
                title={"Projects"}
                description={"recent works"}
            ></Hero>
            <div className="container container-project">
                <div className=" w-full mx-auto my-0 grid gap-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    {data.map((item, index) => {
                        return (
                            <>
                                <Card title={item.title} link={item.link} description={item.description} src={item.src}></Card>
                            </>
                        )
                    })}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Projects;
