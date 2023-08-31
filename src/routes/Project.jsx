import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import Heroimg2 from '../components/heroimg2/Heroimg2'
import Workcard from "../components/workcard/Workcard"
const Project = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="PROJECTS." text="Some of my most recent works" />
            <Workcard />
            <Footer />
        </div>
    )
}

export default Project
