import React, { useState } from "react";
import {Link} from 'react-scroll';


function Navigation() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    return (
        <div>
            <nav>
                <ul className="flex-row mobile-view">
                    <li><Link to='about' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}><span>About</span></Link></li>
                    <li><Link to='portfolio' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}><span>Portfolio</span></Link></li>
                    <li><Link to='resume' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}><span>Resume</span></Link></li>
                    <li><Link to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}><span>Contact</span></Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
