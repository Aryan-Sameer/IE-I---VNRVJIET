import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../css/navbar.css"

const Navbar = () => {
   const [scrolled, setScrolled] = useState(false)
   const navigate = useNavigate()

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > window.innerHeight * 0.9) {
            setScrolled(true)
         } else {
            setScrolled(false)
         }
      }

      document.addEventListener('scroll', handleScroll);

      return () => {
         document.removeEventListener('scroll', handleScroll);
      }
   }, [])

   // const handleScrollToGallery = () => {
   //    navigate("/")

   //    setTimeout(() => {
   //       const gallery = document.getElementById("gallery")
   //       if (gallery) {
   //          gallery.scrollIntoView({ behavior: "smooth" })
   //       }
   //    }, 100)
   // }

   const handleScrollToFooter = () => {
      const contact = document.getElementById("contact")
      contact.scrollIntoView({ behavior: "smooth" })
   }

   return (
      <>
         <nav className={scrolled ? 'navOnScroll' : 'nav'}>
            <div className='navTitle'>
               <img src="./static/vnr logo.jpeg" alt="" />
               <h3>IE(I) - VNR VJIET</h3>
            </div>
            <div className='navLinks'>
               <ul>
                  <NavLink className={(e) => e.isActive ? "activePage" : ""} style={{ textDecoration: "none", margin: "0" }} to="/"><li>Home</li></NavLink>
                  {/* <li onClick={handleScrollToGallery}>Gallery</li> */}
                  <NavLink className={(e) => e.isActive ? "activePage" : ""} style={{ textDecoration: "none", margin: "0" }} to="/Events"><li>Events</li></NavLink>
                  <NavLink className={(e) => e.isActive ? "activePage" : ""} style={{ textDecoration: "none", margin: "0" }} to="/Blog"><li>Blog</li></NavLink>
                  <NavLink className={(e) => e.isActive ? "activePage" : ""} style={{ textDecoration: "none", margin: "0" }} to="/Registrations"><li>Registrations</li></NavLink>
                  <li onClick={handleScrollToFooter}>Contact</li>
               </ul>
            </div>
         </nav>
      </>
   )
}

export default Navbar
