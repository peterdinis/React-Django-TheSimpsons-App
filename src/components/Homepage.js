import React from 'react';
import './Homepage.css';

function Homepage() {
    return (
        <div className='home'>
            <h1 className='header'>The Simpsons DB</h1>
            <p className='subheader'>Find or create character</p>
            <div className='btns'>
                <button className='all-button'>
                    <a className='all-link-button' href='/all'>All Characters</a>
                </button>
                <button className='create-button'>
                    <a className='create-link-button' href='/create'>Create Character</a>
                </button>
            </div>
        </div>
    )
}

export default Homepage
