import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Housing Society</p>
                            <p>Pakistan</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />03231562344</h4>

                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />abc@gmail.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About me</h4>
                    <p>Software engineering student with a passion for crafting responsive websites using React. Transforming designs into captivating and seamless user experiences.</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
