import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Notifications({ anchorElNoti, handleCloseNotifi }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Menu
                id="lock-menu"
                anchorEl={anchorElNoti}
                keepMounted
                open={Boolean(anchorElNoti)}
                onClose={handleCloseNotifi}
            >
                <MenuItem>NotificationsNotificationsNotificationsNotifications</MenuItem>
                <MenuItem>Notifications</MenuItem>
                <MenuItem>Notifications</MenuItem>
                <MenuItem>Notifications</MenuItem>
            </Menu>
        </div>
    );
}