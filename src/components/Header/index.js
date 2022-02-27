import React from "react";
import Nav from "../Nav";

function Header(props) {
const { currentPage, setCurrentPage } = props;

    return (
        <header className="header">
            <div className="name">
                <h1>Eric Furukawa</h1>
            </div>
            <div>
                <Nav
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                ></Nav>
            </div>
            
        </header>
    );
}

export default Header;
