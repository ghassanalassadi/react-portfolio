import React from "react";


function Navigation(props) {
    const {currentPage, handlePageChange} = props;

    return (
        <div>
            <nav>
                <ul className="flex-row mobile-view">
                    <li className={currentPage === 'about'}><span onClick={() => handlePageChange('about')}>About</span></li>
                    <li className={currentPage === 'portfolio'}><span onClick={() => handlePageChange('portfolio')}>Portfolio</span></li>
                    <li className={currentPage === 'contact'}><span onClick={() => handlePageChange('contact')}>Contact</span></li>
                    <li className={currentPage === 'resume'}><span onClick={() => handlePageChange('resume')}>Resume</span></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
