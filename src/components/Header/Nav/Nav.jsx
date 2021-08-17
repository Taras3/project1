import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Header.module.css';

const Nav = () => {
    return (
        <div className={classes.navCl}>
            <NavLink to="/home" className="classes.active"><button>Home</button></NavLink>
            <NavLink to="/list" className="classes.active"><button>some part1</button></NavLink>
            <button>some part2</button>
        </div>
    )
}

export default Nav;