import React from 'react';
import * as nav from '../static/script/utility.js';

const Navbar  = () => (

    <nav id="nav-container" className="desktop">
        <a className="tab">&lt;Christian /&gt;</a>
        <a className="tab">About</a>
        <a className="tab">Experience</a>
        <a className="tab">Projects</a>
        <a className="responsive-icon" onClick={nav.responsiveLinks}><i className="fa fa-bars"></i></a>
    </nav>

);

export default Navbar;