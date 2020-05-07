import React from 'react';
import  makeStyles  from '../layout/Styles';

const Footer = () => {
    const classes=makeStyles();
    return (
        <div className={classes.footer}>
            <footer>
            <span >Copyright &copy; Damatui 2020</span>
        </footer>
        </div>
        
    );
}

export default Footer; 