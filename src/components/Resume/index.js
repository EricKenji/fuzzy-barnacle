import React from "react";

function Resume() {
    return (
        <div className="resume">
            <div className="resume-header">
                <h1>
                Click here to download my resume
            </h1>
            <a href="https://docs.google.com/document/d/0B0SaHfY6CXTWS29PbXVnUzhlMEFQR2NScVluZlhPSXpvb2lj/edit?usp=sharing&ouid=107104153301625926236&resourcekey=0-QI-N_EMUC0598ubUS_vosQ&rtpof=true&sd=true">
                <button>Click Me!</button>
            </a>
            </div>
            
            <div className="proficiencies">
                <h2>Proficiencies</h2>
                    <li>JavaScript</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Mongoose</li>
                    <li>MySQL</li>
                    <li>GraphQL</li>
                    <li>Sequelize</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>jQuery</li>
                    <li>GitHub</li>
            </div>
        </div>
    );
};

export default Resume;