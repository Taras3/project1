import React from 'react';
import classes from './Header.module.css';
import Nav from './Nav/Nav';

const Header = () => {

    return (
        <div className={classes.header}>
            <div className={classes.container + ' ' + classes.blFl}>
                 <h2><span>React</span>Part</h2>
                 <Nav/>
            </div>
        </div>
    )
}

export default Header;