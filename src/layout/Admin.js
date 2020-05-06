import React from 'react';
import TopBar from '../components/TopBar'
import Sidebar from '../components/SideBar'
import clsx from 'clsx';
import useStyles from './Styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const Admin = () => {
    const classes = useStyles();
    /**
     * si no se quiere cargar el sidebar de entrada, solo poner false al useState
     */
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopBar/>
            <Sidebar/>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                    Contenedor para las paginas
            </main>
        </div>
    );
}

export default Admin;