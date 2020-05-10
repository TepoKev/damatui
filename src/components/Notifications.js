import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

export default function Notifications({ openNot, toggleNot }) {
    const classes = useStyles();
    return (
        <div>
            <Popover
                id="Notifications"
                open={openNot}
                onClose={toggleNot}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>Area de Notificaciones</Typography>
            </Popover>
        </div>
    );
}