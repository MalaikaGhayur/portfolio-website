import React from 'react'
import './Aboutcontact.css'
import { Link } from 'react-router-dom'
const Aboutcontact = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I am react front-end developer. I create responsive secure websites for my clients</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src='/about/aboutone.jpg' alt='true' className='img' style={{ width: '280px', height: '200px' }} />
                    </div>
                    <div className='img-stack bottom'>
                        <img src='/about/aboutthree.jpg' alt='true' className='img' style={{ width: '280px', height: '200px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutcontact
