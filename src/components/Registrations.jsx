import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/registrations.css"

const Registrations = () => {

    let ieiMembershipLink = ""
    let currentEvents = [
        // {
        //     banner: "http://placehold.it/250x150&text=Event_Banner",
        //     title: "event title",
        //     link: "link to the google form"
        // },
    ]

    ////////////////////////////////////////////////////////////////////////
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let openRegistration = false
    let eventregitration = false

    if (ieiMembershipLink == "") {
        openRegistration = false
    }
    else {
        openRegistration = true
    }

    if (currentEvents.length == 0) {
        eventregitration = false
    }
    else {
        eventregitration = true
    }

    return (
        <div className='canvas'>

            <div className="whyUs">
                <h3>Why IE(I) Membership?</h3>
                <p>You can get free access to hackathons, workshops, enjoyable events, and other resources by being a member of the IEI community. It's an excellent chance to meet other like-minded students, obtain practical experience, and develop your abilities through the many interesting events the IEI chapter offers.</p>
            </div>

            {openRegistration ? <div className="membership">
                <h3 className='open'>IEI MEMBERSHIP IS OPEN!</h3>
                <p>Click <Link target='_blank' to={ieiMembershipLink}>here</Link> to register</p>
            </div> :
                <h3 className='notOpen'>IE(I) membership is not open!</h3>}
            <hr />

            {eventregitration && <h3 style={{ marginBottom: "10px" }}>Current Events</h3>}
            <div className="currentEvents">

                {eventregitration ? currentEvents.map((item) => {
                    return (
                        <div key={item.title} className="banner">
                            <Link target='_blank' to={item.link}><img src={item.banner} alt="" /></Link>
                            <h5>{item.title}</h5>
                        </div>
                    )
                }) : ""}

            </div>
            {eventregitration || <h3 className='noEvents'>No events currrently!</h3>}

        </div>
    )
}

export default Registrations
