import React from 'react'
import { useEffect } from 'react'

const Team = () => {

    const members = [
        {
            id: 1,
            image: "/static/core team/VAMSI.jpg",
            name: "M Vamsi Krishna ",
            position: "Chairman",
            email: "vamshimuniganti23@gmail.com"
        },
        {
            id: 2,
            image: "/static/core team/sindhu.jpg",
            name: "G Sindhu Sri",
            position: "Vice Chair",
            email: "sindhusri1703@gmail.com"
        },
        {
            id: 3,
            image: "/static/core team/sumanth.jpg",
            name: "Muniganti Sumanth",
            position: "General Secretary",
            email: "sumanthmuniganti31@gmail.com"
        },
        {
            id: 4,
            image: "/static/core team/shankar.jpg",
            name: "L Bhavani Shankar Prasad",
            position: "President",
            email: "bhavanishankarr2003@gmail.com"
        },
        {
            id: 5,
            image: "/static/core team/Prathiba.jpg",
            name: "Boddupalli Prathibha",
            position: "Vice President",
            email: "boddupalliprathiba@gmail.com"
        },
        {
            id: 6,
            image: "/static/core team/ritu raj.jpg",
            name: "Rituraj Swain",
            position: "Operations Chief",
            email: "riturajswain30@gmail.com"
        },
        {
            id: 7,
            image: "public/static/core team/srinidh.jpg",
            name: "Srinidh Reddy",
            position: "Treasurer",
            email: "srinidh264@gmail.com"
        },
        {
            id: 8,
            image: "/static/core team/Sravya.jpg",
            name: "Sravya Vengala",
            position: "Technical Head",
            email: "vengalasravya41@gmail.com"
        },
        {
            id: 9,
            image: "/static/core team/Meenakshi.jpg",
            name: "V Meenakshi",
            position: "Creative Head",
            email: "meenakshivannala3110@gmail.com"
        },
        {
            id: 10,
            image: "http://placehold.it/150x150",
            name: "R Dhawan Kumar",
            position: "Design Head",
            email: "dhawanxxx22@gmail.com"
        },
        {
            id: 11,
            image: "/static/core team/aashrith.jpg",
            name: "Aashrith G",
            position: "Chief Event Organizer",
            email: "aashrithgunti@gmail.com"
        },
        {
            id: 12,
            image: "/static/core team/Hrushikesh.jpg",
            name: "Hrushikesh Sarma",
            position: "PR Head",
            email: "hrushikeshsarma44@gmail.com"
        },
        {
            id: 13,
            image: "http://placehold.it/150x150",
            name: "Mamidi Supriya",
            position: "Social Media Coordinator",
            email: "mamidisupriya293@gmail.com"
        },
        {
            id: 14,
            image: "/static/core team/Uday.jpg",
            name: "T Uday Venkat",
            position: "Inventory and Logistics",
            email: "udayvenkat2003@gmail.com"
        },
        {
            id: 15,
            image: "/static/core team/Thirumal.jpg",
            name: "G Thirumal Chowdary",
            position: "Head Alumni Connect",
            email: "thirumalg98@gmail.com"
        },
        {
            id: 16,
            image: "/static/core team/venkat.jpg",
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
                            <img src={item.image} width={"150px"} height={"150px"} alt="" />
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
