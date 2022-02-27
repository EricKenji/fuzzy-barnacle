import React from "react";
import Nav from "../Nav";

function Header() {
    return (
        <header className="header">
            <div className="name">
                <h1>Eric Furukawa</h1>
            </div>
            <div>
                <Nav></Nav>
            </div>
            
        </header>
    );
}

export default Header;
