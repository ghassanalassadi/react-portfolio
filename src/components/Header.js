import React from 'react';
import Navigation from './Navigation';

function Header(props) {
    const {currentPage, handlePageChange} = props;

    return (
        <div>
            <header>
                <span className='my-name'>Ghassan Al Assadi</span>
                <Navigation
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                >
                </Navigation>
            </header>
        </div>
    );
}

export default Header;


