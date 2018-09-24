import React from 'react';
import markdownLogo from './markdown-logo.svg';
import githubIcon from './github-icon.svg';

const Footer = () => {
    return (
        <footer className="flex flex-row flex-justify-between flex-align-center" style={{ 
        position: 'fixed', 
        bottom: '0', 
        width: '100%', 
        height: '64px' }}>
        	<div id="logo-container">
        		<img src={markdownLogo} alt="markdown-logo"/>
        	</div>
        	<div id="github-link">
    		<a href="https://github.com/burzychsd"><img src={githubIcon} alt="github-icon"/></a>
    		</div>	
        </footer>
    );
};

export default Footer;
