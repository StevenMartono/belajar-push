import React from 'react';
import reactJsLogo from '../image/reactjs-icon.svg'

function Header() {
    return (
        <div className='header'>
            <div className='top-left'>
                <img src={reactJsLogo} className="App-logo" alt="logo" width='100rem'/>
                <h1>ReactFacts</h1>
            </div>
            <div className='top-right'>
                <p>React Course - Project 1</p>
            </div>
        </div>
    )
}

export default Header