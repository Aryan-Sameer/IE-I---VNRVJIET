import React from 'react'
import { useEffect } from 'react'
import "../css/events.css"

const Events = () => {
    let convergence = [
        {
            id: 1,
            image: "/dynamic/IEI Events/Convergence pics/Hardware Hackathon.jpg",
            title: "Hardware Hackathon",
            description: ""
        },
        {
            id: 2,
            image: "/dynamic/IEI Events/Convergence pics/Blogathon.jpeg",
            title: "Blogathon",
            description: ""
        },
        {
            id: 3,
            image: "/dynamic/IEI Events/Convergence pics/model based design.jpeg",
            title: "Model Based Design",
            description: ""
        },
    ]

    let emerge = [
        {
            id: 1,
            image: "/dynamic/IEI Events/Emerge pics/Emerge main poster.jpeg",
            title: "EmErgE'24",
            description: "EMERGE'24 is a Two-days tecinical fest conducted by the IEI student chapter in collaboration with EEE department. The event saw enthusiastic participation from students not only from EEE department, but also from other departments."
        },
        {
            id: 2,
            image: "/dynamic/IEI Events/Emerge pics/Techbate.jpeg",
            title: "Techbate",
            description: "Techbate was a ONE-day technical event held on March 22nd 2024, as a part of the Emerge Fest organized by the IE(I) student chapter. The event saw enthusiastic participation from students."
        },
        {
            id: 3,
            image: "/dynamic/IEI Events/Emerge pics/Buildathon 2.0.jpeg",
            title: "Build-A-thon 2.0",
            description: "Build-a-Thon 2.0 was a Three-day Project Contest held on 21st ,22nd & 23rd March,2024, as a part of the Emerge FEST organized by the IE(I) student chapter. The event saw enthusiastic participation from students."
        },
        {
            id: 4,
            image: "/dynamic/IEI Events/Emerge pics/Raspberry pi.jpeg",
            title: "Raspberry Pi workshop",
            description: "The event Hands-on Workshop on Raspberry Pi was conducted on 21st March 2024 at A-306 from 1:40 pm4:40 pm. The resource person of this event was samanidhar, IVth Year, President of ISTE student chapter VNR VJIET, ECE department,VNR VJIET. The participants understood the basics of Raspberry Pi and setting up of raspberry pi and programming it with python."
        },
        {
            id: 5,
            image: "/dynamic/IEI Events/Emerge pics/Image Processing.jpeg",
            title: "Image Processing with MATLAB workshop",
            description: "This event was conducted on 22nd March 2024 at A-306 from 9:00 am - 1:00 pm. The resource person of this event was Chitta Avaneesh Ketan, IIIrd year EEE, Founder of Mathletes Club, VNRVJIET. The participants thoroughly learned about image processing and programs related it."
        },
        {
            id: 6,
            image: "/dynamic/IEI Events/Emerge pics/Paper presentation.jpeg",
            title: "Paper Presentation",
            description: "Paper Presentation was held on 22nd& 23rd March 2024, as a part of the Emerge FEST organized by the IE(I) student chapter. The event saw enthusiastic participation from students."
        },
        {
            id: 7,
            image: "/dynamic/IEI Events/Emerge pics/Flip it.jpeg",
            title: "Flip It",
            description: "The event FLIP IT was conducted on 21nd March 2024 at A- 303 from 2:00 pm- 4:40 pm. This workshop was conducted as a part of the EMERGE fest organized by the IE(I) student chapter."
        },
        {
            id: 8,
            image: "/dynamic/IEI Events/Emerge pics/Treasure hunt.jpeg",
            title: "Treasure Hunt",
            description: "Treasure Hunt was a ONE-day technical cum fun event held on March 22nd. 2024, as a part of the EMERGE Technical Fest organized by the IE(I) student chapter. The event saw enthusiastic participation from students."
        },
        {
            id: 9,
            image: "/dynamic/IEI Events/Emerge pics/Hangman.jpeg",
            title: "Hangman Game",
            description: "Hangman was held on 22ndMarch 2024, as a part of the Emerge FEST organized by the IE(I) student chapter. The registrations were taken through google forms and the participants are asked to register as a team. Spot registrations for the event were also considered. The event saw enthusiastic participation from students."
        },
        {
            id: 10,
            image: "/dynamic/IEI Events/Emerge pics/embeded systems.jpg",
            title: "Embeded Systems in EV",
            description: "The IEI student chapter of VNR VJIET organized a Guest Lecture on Embedded Systems in Electric Vehicles (EVs) as part of EMERGE-2k24. Anvesh Vasireddy, a lead engineer at Stellantis, discussed the importance of Embedded Systems in electric vehicles."
        },
    ]

    let other = [
        {
            id: 1,
            image: "/dynamic/IEI Events/Other events/Amp-up.jpeg",
            title: "Amp Up",
            description: "The IE(I) Student Chapter organized the AMP UP! event for II and III-year students from circuital branches of VNRVJIET. The event consisted of three rounds: a crossword puzzle, Heads Up game, and a four-digit passcode-solving challenge. The event was successful, offering students a mix of practical knowledge and entertainment, allowing them to test their comprehension and work together as a team."
        },
        {
            id: 2,
            image: "/dynamic/IEI Events/Other events/ipl auction.jpg",
            title: "Mock IPL Auction",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, laudantium at nostrum saepe dolorem, eaque obcaecati ex eveniet quo ratione molestias voluptatibus sint magni tempora quam sit praesentium! Totam, accusantium!"
        },
        {
            id: 3,
            image: "/dynamic/IEI Events/Other events/Career guidance.jpeg",
            title: "Career Guidance",
            description: "On February 24, 2024, team IEI held a career guidance session for 2nd and 3rd-year EEE department students. Speakers included alumni from 2022 and 2023 batches, Thumma Manish Reddy, Yashwanth Gade, and Chaitanya Netha. The event aimed to provide students with industry insights, confidence, and guidance on their chosen path."
        },
        {
            id: 4,
            image: "/dynamic/IEI Events/Other events/Buildathon.jpeg",
            title: "Buildathon",
            description: "The IEI student chapter held a build-a-thon event from November 22nd to 24th at A-302 to help students of 1st and 2nd years demonstrate solutions for hardware or software problem statements. Students were provided with assistance and assigned a student coordinator for mentorship throughout the event."
        },
        {
            id: 5,
            image: "/dynamic/IEI Events/Other events/Quiz carnival.png",
            title: "Quiz Carnival",
            description: "The IEI student chapter held a 'QUIZ CARNIVAL' event on October 18th, featuring four rounds of fun and a rapid fire round. Participants learned about general knowledge, Indian states, and sports, while also enhancing their teamwork, time management, and accuracy skills. The event was highly engaging and informative."
        },
        {
            id: 6,
            image: "/dynamic/IEI Events/Other events/electrolunar.jpeg",
            title: "Electrolunar Symposium",
            description: "IEI held an Electrolunar Symposium on September 11th to discuss the electrical engineering of Chandrayan-3, a solar-powered lunar landing vehicle, and its impact on the present and future. Students discussed various electrical engineering techniques used."
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<>

        <div className="canvas">

            <div className="album">
                <div className="brief">
                    <h3>CONVEGRGENCE</h3>
                    <p>CONVERGENCE is a National Level Technical Symposium of VNR VJIET being conducted since 1999. It serves as a platform for tech enthusiasts to engage in Hackathons, Coding contests, Startup Idea competitions, Technical Paper presentations, and Workshops, promoting innovation and technical skill development.</p>
                </div>
                <div className="cardContainer">
                    {convergence.map((item) => {
                        return (
                            <div key={item.id} className='card'>
                                <img className='eventPoster' src={item.image} alt="" />
                                <h5 className='eventTitle'>{item.title}</h5>
                                <p className='eventDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perferendis?</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <hr />

            <div className="album">
                <div className="brief">
                    <h3>EMERGE</h3>
                    <p>EMERGE is the annual technical symposium organized by the IEI student chapter in collaboration with the EEE department. With over 10 exciting events, participants from various departments showcase their talents and gain valuable experience. The event consistently attracts a large and diverse crowd, making it a highlight of the academic year.</p>
                </div>
                <div className="cardContainer">
                    {emerge.map((item) => {
                        return (
                            <div key={item.id} className='card'>
                                <img className='eventPoster' src={item.image} alt="" />
                                <h5 className='eventTitle'>{item.title}</h5>
                                <p className='eventDesc'>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <hr />

            <div className="album">
                <div className="brief">
                    <h3>OTEHR EVENTS</h3>
                    <p>The IEI student chapter regularly organizes a variety of events, from fun activities to technical hackathons and quiz competitions. These events give students the chance to learn, collaborate, and develop their skills in an interactive and supportive setting.</p>
                </div>
                <div className="cardContainer">
                    {other.map((item) => {
                        return (
                            <div key={item.id} className='card'>
                                <img className='eventPoster' src={item.image} alt="" />
                                <h5 className='eventTitle'>{item.title}</h5>
                                <p className='eventDesc'>
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    </>
    )
}

export default Events
