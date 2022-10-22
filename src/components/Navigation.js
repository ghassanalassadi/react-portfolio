import React from "react";


function Navigation() {
    return (
        <div>
            <nav>
                <ul className="flex-row mobile-view">
                    <li><span>About</span></li>
                    <li><span>Portfolio</span></li>
                    <li><span>Resume</span></li>
                    <li><span>Contact</span></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
