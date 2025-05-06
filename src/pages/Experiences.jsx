import "../index.css";
import "../css/style.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const experiences = [
  {
    company: "Eventber Pte. Ltd.",
    title: "Fullstack Developer",
    date: "March 25 - Present",
    isActive: true,
    details: [
      "Developing front-end and back-end using Laravel, NextJS, NodeJS, etc.",
      "Integrating systems and developing APIs.",
      "Improving performance and ensuring development quality.",
    ],
  },
  {
    company: "PT WebHozz Media",
    title: "Part-time IT Trainer",
    date: "March 24 - Present",
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
    date: "June 24 - Present",
    isActive: true,
    details: [
      "Conducting presentations and webinars.",
      "Providing guidance to prospective students.",
      "Supporting recruitment with admissions and marketing.",
    ],
  },
  {
    company: "Dinas Pendidikan Provinsi Jawa Barat",
    title: "Frontend Developer",
    date: "May 24 - November 24",
    details: [
      "Creating responsive web pages using NextJS.",
      "Integrating frontend with backend via RESTful APIs.",
      "Writing clean and maintainable code.",
    ],
  },
  {
    company: "PT TenizenCode Indonesia",
    title: "Project Manager, Full Stack Developer",
    date: "February - June 24",
    details: [
      "Defining project scope and timelines.",
      "Communicating with stakeholders and managing risks.",
      "Leading teams to deliver results.",
    ],
  },
  {
    company: "PT Laisindo Anugerah Jaya Abadi",
    title: "Freelance Web Developer",
    date: "August - September 23",
    details: [
      "Writing clean code with Laravel.",
      "Creating UI designs and layouts.",
      "Designing database structure and testing.",
    ],
  },
  {
    company: "PT Solusi Intek Indonesia",
    title: "Software Developer",
    date: "October 22 - March 23",
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
                    <h3 className={`text-3xl ${exp.isActive ? "text-blue-400" : "text-white"}`}>
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-300">
                      <b>{exp.company}</b> &mdash; {exp.date}
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
