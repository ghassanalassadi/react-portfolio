import React from "react";


function Navigation(props) {
    const {currentPage, handlePageChange} = props;

    return (
        <div>
            <nav>
                <ul>
                    <li className={currentPage === 'about'}><span onClick={() => handlePageChange('about')}>About</span></li>
                    <li className={currentPage === 'Portfolio'}><span onClick={() => handlePageChange('portfolio')}>Portfolio</span></li>
                    <li className={currentPage === 'Contact'}><span onClick={() => handlePageChange('contact')}>Contact</span></li>
                    <li className={currentPage === 'Resume'}><span onClick={() => handlePageChange('resume')}>Resume</span></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
