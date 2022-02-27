import React from "react";

function Nav(props) {
    const { currentPage, setCurrentPage } = props;


    return (
        <nav>
            <ul className="flex-row">
                <li>
                    <span onClick={() => setCurrentPage('AboutMe')}>
                        About Me
                    </span>
                </li>
                <li>
                    <span onClick={() => setCurrentPage('Portfolio')}>
                        Portfolio
                    </span>
                </li>
                <li>
                    <span onClick={() => setCurrentPage('Contact')}>
                        Contact
                    </span>
                </li>
                <li>
                    <span onClick={() => setCurrentPage('Resume')}>
                        Resumé
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;