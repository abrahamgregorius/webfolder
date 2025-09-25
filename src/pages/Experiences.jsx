import "../index.css";
import "../css/style.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const experiences = [
    {
        company: "S-Prep Bootcamp",
        title: "Founder and Managing Director",
        date: "May 2025 - Present",
        isActive: true,
        details: [
            "Oversee and manage the overall daily operations of the bootcamp.",
            "Develop strategic initiatives to drive business growth and student enrollment.",
            "Build partnerships and maintain relationships with mentors and stakeholders.",
        ],
    },
    {
        company: "PT WebHozz Media",
        title: "Part-time IT Trainer",
        date: "March 2024 - Present",
        isActive: true,
        details: [
            "Providing individualized support and guidance to trainees.",
            "Developing lesson plans and training materials for Web Development.",
            "Evaluating trainees' progress and offering feedback.",
        ],
    },
    {
        company: "BINUS University",
        title: "Education Counselor",
        date: "June 2024 - Present",
        isActive: true,
        details: [
            "Conducting presentations and webinars.",
            "Providing guidance to prospective students.",
            "Supporting recruitment with admissions and marketing.",
        ],
    },
    {
        company: "Eventber Pte. Ltd.",
        title: "Fullstack Developer",
        date: "March 2025 - Aug 2025",
        isActive: false,
        details: [
            "Developing software solutions using Laravel, NextJS, NodeJS, etc.",
            "Integrating systems and developing APIs.",
            "Improving performance and ensuring development quality.",
        ],
    },
    {
        company: "Dinas Pendidikan Provinsi Jawa Barat",
        title: "Frontend Developer",
        date: "May 2024 - November 2024",
        details: [
            "Creating responsive web pages using NextJS.",
            "Integrating frontend with backend via RESTful APIs.",
            "Writing clean and maintainable code.",
        ],
    },
    {
        company: "PT TenizenCode Indonesia",
        title: "Project Manager, Full Stack Developer",
        date: "February - June 2024",
        details: [
            "Defining project scope and timelines.",
            "Communicating with stakeholders and managing risks.",
            "Leading teams to deliver results.",
        ],
    },
    {
        company: "PT Laisindo Anugerah Jaya Abadi",
        title: "Freelance Web Developer",
        date: "August - September 2023",
        details: [
            "Writing clean code with Laravel.",
            "Creating UI designs and layouts.",
            "Designing database structure and testing.",
        ],
    },
    {
        company: "PT Solusi Intek Indonesia",
        title: "Software Developer",
        date: "October 2022 - March 2023",
        details: [
            "Programming and debugging software.",
            "Collaborating with developers and managers.",
            "Conducting project analysis and breakdown.",
        ],
    },
];

export default function Experiences() {
    return (
        <>
            <div className="text-white container mx-auto my-0 p-4 w-full max-w-[840px]">
                <Navbar></Navbar>
                <Hero
                    title={"Experiences"}
                    description={"past professional experiences"}
                ></Hero>
                <div className="content">
                    <ul className="text-center flex flex-col gap-3 font-mono">
                        {experiences.map((exp, index) => {
                            return (
                                <>
                                    <div
                                        key={index}
                                        className="bg-white bg-opacity-5 backdrop-blur-lg text-left p-6 rounded-2xl shadow-lg"
                                    >
                                        <h3
                                            className={`text-3xl ${
                                                exp.isActive
                                                    ? "text-blue-400"
                                                    : "text-white"
                                            }`}
                                        >
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg text-gray-300">
                                            <b>{exp.company}</b> &mdash;{" "}
                                            {exp.date}
                                        </p>
                                        <ul className="list-disc list-inside mt-4 text-gray-100 space-y-1">
                                            {exp.details.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            );
                        })}
                    </ul>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}
