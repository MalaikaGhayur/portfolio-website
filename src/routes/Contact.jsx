import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import Heroimg2 from '../components/heroimg2/Heroimg2'
import Form from '../components/form/Form'
const Contact = () => {
    return (
        <div>
            <Navbar />
            <Heroimg2 heading="CONTACT." text="Lets have a Chat" />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact
