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
            <div className="content">
                <ul className='text-center flex flex-col gap-3 font-mono'>
                    <li className='border-yellow-400 border-[3.5px] text-sm p-2 rounded'>Binus University Widia Scholarship 2024 Awardee (Fully-funded Undergraduate Scholarship)</li>
                    <li className='border-yellow-400 border-[3.5px] text-sm p-2 rounded'>1st Place Winner of Universitas Nasional FTKI Confest Koding Cepat Competition 2024</li>
                    <li className='border-yellow-400 border-[3.5px] text-sm p-2 rounded'>Winner of Best Overall and Best Backend Category of Ayo Bisa Indonesia Competition 2023</li>
                    <li className='border-yellow-700 border-[3.5px] text-sm p-2 rounded'>Bronze Medalist of Lomba Kompetensi Siswa Nasional 2023 (Web Technologies)</li>
                    <li className='border-yellow-400 border-[3.5px] text-sm p-2 rounded'>1st Place Winner of Lomba Kompetensi Siswa Provinsi DKI Jakarta 2023 (Web Technologies)</li>
                    <li className='border-yellow-400 border-[3.5px] text-sm p-2 rounded'>1st Place Winner of Lomba Kompetensi Siswa Wilayah Jakarta Timur 2 2023 (Web Technologies)</li>
                    <li className='border-yellow-700 border-[3.5px] text-sm p-2 rounded'>3rd Place Winner of Lomba Kompetensi Siswa Wilayah Jakarta Timur 2 2022 (Web Technologies)</li>
                    <li className='border-white border-[3.5px] text-sm p-2 rounded'>Pelajar Pelopor Lalu Lintas dan Angkutan Jalan DKI Jakarta 2022</li>
                    <li className='border-yellow-700 border-[3.5px] text-sm p-2 rounded'>Semifinalist (Top 50) of Kompetensi Literasi dan Numerasi Tingkat Nasional 2023</li>
                    <li className='border-yellow-400 border-[3.5px] text-sm p-2 rounded'>Highest TOEIC score at SMK Negeri 10 Jakarta (935)</li>
                    <li className='border-yellow-400 border-[3.5px] text-sm p-2 rounded'>Best Graduate of 2021 Class of Santo Yoseph Junior High School</li>
                    <li className='border-white border-[3.5px] text-sm p-2 rounded'>Best Brainly.id Moderator (August 2020)</li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Achievements