import React from 'react';
import  makeStyles  from '../layout/Styles';

const Footer = () => {
    const classes=makeStyles();
    return (
        <footer className={classes.footer}>
            <span >Copyright &copy; Damatui 2020</span>
        </footer>
    );
}

export default Footer; 