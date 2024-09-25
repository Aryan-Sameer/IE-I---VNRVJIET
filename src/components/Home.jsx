import React from 'react'
import News from './News'
import Gallery from './Gallery'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom'

const Home = () => {

    const announcements = [
        "The registrations are open for 1st and 2nd year students",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, accusamus?",
        "Lorem ipsum dolor sit amet consectetur.",
    ]

    const handleExplore = () => {
        const about = document.getElementById("about")
        about.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <div className="hero">
                <Navbar />
                <div className="welcome">
                    <div className="intro">
                        <div className='title'>
                            <h1>WELCOME TO</h1>
                            <h1>Institution of Engineers (India), Student Chapter at VNRVJIET, Hyderabad</h1>
                        </div>
                        <div>
                            <h2 style={{ userSelect: "none" }}>Focusing on <span className='domain'></span></h2>
                            <button className='explore' onClick={handleExplore}>Explore</button>
                        </div>
                    </div>

                    <div className="ieiLogo">
                        <img src="/static/ieiherologo.png" alt="IE(I) Logo" />
                    </div>
                </div>
            </div>

            <div id='about' className='aboutUs'>
                <div className="aboutInfo">
                    <h1 className='headings'>About us</h1>
                    <p>
                        The Institution of Engineers (India), IE(I), is the national organization for engineers in India and the largest multi-disciplinary engineering society in the world. This chapter enables students to apply technical knowledge gained from guest lectures, workshops, and project exhibitions. It fosters critical thinking and leadership skills, supporting budding engineers in their career growth. IEI conducts various student activities, with the annual technical fest "EmeRgE" being the highlight, blending fun and learning. The vision is to develop a premier technical and scientific institution, producing creative, skilled individuals, and to promote technology that enhances humanity.
                    </p>
                    <Link style={{ textDecoration: "none", border: "none" }} to="/Team"><button className='ourTeamBtn'>Our Team <span className='teamArrow'><IoIosArrowForward /></span></button></Link>
                </div>
                <div className="aboutImg">
                    <img src="/static/aboutImg.jpg" alt="" />
                    <div className="stats">

                        <div className="s1">
                            <h2>10+</h2>
                            <span>years of experience</span>
                        </div>
                        <div className="line" style={{ border: "2px solid black" }}></div>
                        <div className="s2">
                            <h2>15+</h2>
                            <span>events annually</span>
                        </div>
                        <div className="line" style={{ border: "2px solid black" }}></div>
                        <div className="s3">
                            <h2>350+</h2>
                            <span>Active members</span>
                        </div>

                    </div>
                </div>
            </div>

            {announcements.length != 0 && <fieldset className="announcements">
                <div className="content">
                    <legend>Announcements</legend>
                    <ul>
                        {announcements.map((item) => {
                            return (
                                <li>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </fieldset>}

            <News />
            <Gallery />

        </main>
    )
}

export default Home
