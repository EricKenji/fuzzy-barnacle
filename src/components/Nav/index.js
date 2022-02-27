import React from "react";

function Nav() {

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    About Me
                </li>
                <li>
                    Portfolio
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Resumé
                </li>
            </ul>
        </nav>
    );
}

export default Nav;