import React from 'react'
import { useEffect } from 'react'
import "../css/team.css"

const Team = () => {

    const members = [
        {
            id: 1,
            image: "http://placehold.it/150x150",
            name: "M Vamsi Krishna ",
            position: "Chairman",
            email: "vamshimuniganti23@gmail.com"
        },
        {
            id: 2,
            image: "http://placehold.it/150x150",
            name: "G Sindhu Sri",
            position: "Vice Chair",
            email: "sindhusri1703@gmail.com"
        },
        {
            id: 3,
            image: "http://placehold.it/150x150",
            name: "Muniganti Sumanth",
            position: "General Secretary",
            email: "sumanthmuniganti31@gmail.com"
        },
        {
            id: 4,
            image: "http://placehold.it/150x150",
            name: "L Bhavani Shankar Prasad",
            position: "President",
            email: "bhavanishankarr2003@gmail.com"
        },
        {
            id: 5,
            image: "http://placehold.it/150x150",
            name: "Boddupalli Prathibha",
            position: "Vice President",
            email: "boddupalliprathiba@gmail.com"
        },
        {
            id: 6,
            image: "http://placehold.it/150x150",
            name: "Rituraj Swain",
            position: "Operations Chief",
            email: "riturajswain30@gmail.com"
        },
        {
            id: 7,
            image: "http://placehold.it/150x150",
            name: "Srinidh Reddy",
            position: "Treasurer",
            email: "mail id of member"
        },
        {
            id: 8,
            image: "http://placehold.it/150x150",
            name: "Sravya Vengala",
            position: "Technical Head",
            email: "vengalasravya41@gmail.com"
        },
        {
            id: 9,
            image: "http://placehold.it/150x150",
            name: "V Meenakshi",
            position: "Creative Head",
            email: "meenakshivannala3110@gmail.com"
        },
        {
            id: 10,
            image: "http://placehold.it/150x150",
            name: "R Dhawan Kumar",
            position: "Design Head",
            email: "mail id of member"
        },
        {
            id: 11,
            image: "http://placehold.it/150x150",
            name: "Aashrith G",
            position: "Chief Event Organizer",
            email: "aashrithgunti@gmail.com"
        },
        {
            id: 12,
            image: "http://placehold.it/150x150",
            name: "Hrushikesh Sarma",
            position: "PR Head",
            email: "hrushikeshsarma44@gmail.com"
        },
        {
            id: 13,
            image: "http://placehold.it/150x150",
            name: "Mamidi Supriya",
            position: "Social Media Coordinator",
            email: "mail id of member"
        },
        {
            id: 14,
            image: "http://placehold.it/150x150",
            name: "T Uday Venkat",
            position: "Inventory and Logistics",
            email: "udayvenkat2003@gmail.com"
        },
        {
            id: 15,
            image: "http://placehold.it/150x150",
            name: "G Thirumal Chowdary",
            position: "Head Alumni Connect",
            email: "mail id of member"
        },
        {
            id: 16,
            image: "http://placehold.it/150x150",
            name: "P Y Venkata Sai Teja",
            position: "Executive Head",
            email: "venkatasai0204@gmail.com"
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className='canvas'>
            <h2 style={{ textAlign: "center" }} className='headings'>Our Team</h2>
            <hr />
            <div className="ourTeam">
                {members.map((item) => {
                    return (
                        <div key={item.id} className="memberId">
                            <img src={item.image} alt="" />
                            <div className="memberDesc">
                                <h5>{item.name}</h5>
                                <h6>{item.position}</h6>
                                <p><a href={`mailto:${item.email}`}>{item.email}</a></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Team
