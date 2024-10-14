import React from 'react'
import { GoMail } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import "../css/footer.css"

const Footer = () => {

    let date = new Date
    let year = date.getFullYear()

    return (
        <main>
            <footer id='footer'>

                <div className="rightFoot">
                    <a target='_blank' href="https://www.ieindia.org/WebUI/iei-home.aspx"><img style={{ borderRadius: "50%" }} src="/static/ieiofficialLogo.png" alt="" /></a>
                    <div className="ieiKolkata">
                        <p>The Institution of Engineers (India) is India's national engineers organization.</p>
                        <p>It is a non-profit organization, established in 1920, with its headquarters in Kolkata, India.</p>
                        <p>It is recognized as a statutory body to promote and advance engineering and technology.</p>
                        <p>The institution has over 1 million members, making it one of the world's largest professional bodies of engineers.</p>
                        <p>The Institution of Engineers (India) is the country's premier and largest professional body of engineers.</p>
                    </div>
                </div>

                <div className="leftFoot">
                    <div className="left1">

                        <h3 id='contact' className='headings' style={{ marginTop: "0" }}>Contact</h3>
                        <p>
                            Address: VNR Vignana Jyothi Institute of Eng. and Tech.
                            Pragathi Nagar,Nizampet,Hyderabad 500090
                        </p>
                    </div>
                    <div className="left2">
                        <button className='locationBtn'><a target='_blank' href="https://www.google.com/maps/place/Vallurupalli+Nageswara+Rao+Vignana+Jyothi+Institute+of+Engineering+%26Technology/@17.5384894,78.3828993,17z/data=!4m10!1m2!2m1!1smaps+vnrvjiet!3m6!1s0x3bcb8e0ab28e0975:0x7b048b2858fdee94!8m2!3d17.5387593!4d78.3854026!15sCg1tYXBzIHZucnZqaWV0WgoiCHZucnZqaWV0kgESZW5naW5lZXJpbmdfc2Nob29s4AEA!16zL20vMDk3MDQ0?entry=ttu">View Location <span className='locationRkt'><FaLocationArrow /></span> </a></button>
                        <p><a className='sendMail' target='_blank' href='mailto:iei@vnrvjiet.in'><span className='mailId'><GoMail /></span> iei@vnrvjiet.in</a></p>
                        <div className="social">
                            <a target='_blank' href="https://www.facebook.com/groups/vnriei/"><FaFacebook /></a>
                            <a target='_blank' href="https://www.linkedin.com/company/ie-i-vnrvjiet/posts/?feedView=all"><FaLinkedin /></a>
                            <a target='_blank' href="https://www.instagram.com/iei_vnrvjiet/"><FaInstagram /></a>
                            <a target='_blank' href="https://x.com/iei_kolkata?lang=en"><FaXTwitter /></a>
                        </div>
                    </div>
                </div>

            </footer>
            <div className="copy">
                <p>Copy Right &copy; {year} IE(I) - VNR VJIET | All Rights Reserved</p>
                <span style={{ color: "orange", fontWeight: "900" }}>|</span>
                <p>Created by Technical team of IE(I) - VNR VJIET</p>
            </div>
        </main>
    )
}

export default Footer
