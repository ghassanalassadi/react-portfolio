import React from "react";

function Footer() {
    return (
        <div>
            <footer>
                <a
                    href="https://github.com/ghassanalassadi"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src={require("../assets/github_icon.png")} alt="GitHub" className="icon"></img>
                </a>
                <a 
                    href="https://www.linkedin.com/in/ghassan-al-assadi-772428214/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src={require("../assets/linkedin_icon.png")} alt="LinkedIn" className="icon"></img>
                </a>
                <a
                    href="https://stackoverflow.com/users/18257403/ghassanalassadi"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src={require("../assets/stack_overflow_icon.png")} alt="Stack Overflow" className='icon'></img>
                    </a>
            </footer>
        </div>
    )
};

export default Footer;