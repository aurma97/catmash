import React from 'react';

const FooterApp = () => (
    <div className="text-center m-5 footer">
        &copy; {(new Date()).getFullYear()} <a className="text-primary" href="https://fokoun.me" target="_blank" rel="noopener noreferrer">fokoun.me</a>
    </div>
)
export default FooterApp;