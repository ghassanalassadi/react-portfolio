import React from "react";
import portfolioData from '../portfolioData.json';

function Footer() {
    return (
        <div>
            {
                portfolioData && portfolioData.map(data => {
                    return (
                        <div key={data.id}>
                            <footer>
                                <a
                                    href="https://github.com/ghassanalassadi"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        <img src={process.env.PUBLIC_URL + data.githubIcon} alt="GitHub" className="icon"></img>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/ghassan-al-assadi-772428214/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        <img src={process.env.PUBLIC_URL + data.linkedinIcon} alt="LinkedIn" className="icon"></img>
                                </a>
                            </footer>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Footer;