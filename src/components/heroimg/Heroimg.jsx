import React from 'react'
import './Heroimg.css'
import { Link } from 'react-router-dom'
const Heroimg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img src='assets/herothree.jpg' alt='' className='intro-img'></img>
            </div>
            <div className='content'>
                <p>Hi, i am a Web Developer</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/project" className='btn'>Projects</Link>
                    <Link to="/contact" className='btn btn-light'>Contact</Link>
                </div>
            </div>

        </div>
    )
}

export default Heroimg
