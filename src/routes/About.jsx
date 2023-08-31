import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import Heroimg2 from '../components/heroimg2/Heroimg2'
import Aboutcontact from '../components/aboutcontent/Aboutcontact'
const About = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="ABOUT." text="I am friendly Front-End Developer" />
            <Aboutcontact />
            <Footer />
        </div>
    )
}

export default About
