import React from 'react';
import ReactDOM from "react-dom/client"
import Header from './component/Header';
import Body from './component/Body';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div>
        <Header/>
        <Body/>
    </div>
)