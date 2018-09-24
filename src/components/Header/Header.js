import React from 'react';

const Header = () => {
    return (
        <header className="flex flex-row flex-justify-center flex-align-center" style={{ 
    	width: '100%', 
    	height: '64px', 
    	position: 'absolute', 
    	top: '0', 
    	background: 'rgba(2, 28, 30, 0.9)',
    	boxShadow: '0px 2px 16px 0px rgba(27,122,114,1)',
    	}}>
    		<p id="title"><span>M</span>arkdown <span>P</span>reviewer <span>F</span>CC</p>
        </header>
    );
};

export default Header;
