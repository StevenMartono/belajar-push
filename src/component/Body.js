import React from "react";
// import iconBg from "../image/bg-icon.svg"

function Body() {
    return (
        <div className="body">
            <div className="title">
                <h1>Fun facts about React</h1>
            </div>
            <div className="list">
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
            {/* <img src={iconBg} alt="icon-bg" /> */}
        </div>
    )
}

export default Body