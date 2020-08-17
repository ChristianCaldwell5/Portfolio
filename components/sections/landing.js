import React from 'react';

const Landing = () => (
    <div id="landing-container">
        <div id="landing-content-wrap">
            <div id="landing-name">Christian Caldwell</div>
            <div className="landing-wrap">
                <div className="tease-item">Software Engineer | Frontend Developer</div>
            </div>
            <div className="landing-wrap spacer-top">
                <a className="link-button" href="https://github.com/ChristianCaldwell5" target="_blank"><i className="fa fa-github"></i></a>
                <a className="link-button" href="/static/Resume.pdf" target="_blank">Resume</a>
                <a className="link-button" href="https://www.linkedin.com/in/christian-caldwell-47669a188/" target="_blank"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div id="continue-indicator-wrap">
            <div><i id="arrow-1" className="fa fa-angle-down arrows"></i></div>
            <div><i id="arrow-2" className="fa fa-angle-down arrows"></i></div>
            <div><i id="arrow-3" className="fa fa-angle-down arrows"></i></div>
        </div>
    </div>  
);

export default Landing;