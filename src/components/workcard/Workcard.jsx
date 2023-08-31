import React from 'react';
import { NavLink } from 'react-router-dom';
import './Workcard.css'
const Workcard = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                <div className='project-card'>
                    <img src="/images/one.jpg" alt='image' style={{ width: '200px', height: '200px' }} />
                    <h2 className='project-title'>Project-title</h2>
                    <div className='pro-details'>
                        <p>This is text</p>
                        <div className='pro-btns'>
                            <NavLink className="btn" to="url.com">View</NavLink>
                            <NavLink className="btn" to="url.com">Source</NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src="/images/one.jpg" alt='image' style={{ width: '200px', height: '200px' }} />
                    <h2 className='project-title'>Project-title</h2>
                    <div className='pro-details'>
                        <p>This is text</p>
                        <div className='pro-btns'>
                            <NavLink className="btn" to="url.com">View</NavLink>
                            <NavLink className="btn" to="url.com">Source</NavLink>
                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src="/images/one.jpg" alt='image' style={{ width: '200px', height: '200px' }} />
                    <h2 className='project-title'>Project-title</h2>
                    <div className='pro-details'>
                        <p>This is text</p>
                        <div className='pro-btns'>
                            <NavLink className="btn" to="url.com">View</NavLink>
                            <NavLink className="btn" to="url.com">Source</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Workcard;
