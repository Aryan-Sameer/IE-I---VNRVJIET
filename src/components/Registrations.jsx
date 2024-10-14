import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/registrations.css"
import Accordion from 'react-bootstrap/Accordion';

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

            <Accordion className='my-5' defaultActiveKey="0">
                <h2 className='headings'>FAQs</h2>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why IE(I) Membership?</Accordion.Header>
                    <Accordion.Body>
                    You can get free access to hackathons, workshops, enjoyable events, and other resources by being a member of the IEI community. It's an excellent chance to meet other like-minded students, obtain practical experience, and develop your abilities through the many interesting events the IEI chapter offers.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is IE(I)?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What events does IE(I) conduct?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    )
}

export default Registrations
