import React from "react";
import clsx from "clsx";
import useStyles from "../layout/Styles";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import routes from "../routes/routes";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SideBar = ({ open, toggleDrawer }) => {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();
    const classesExp = useStylesExp();
    const theme = useTheme();
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    var listLink = [];
    routes.forEach((prop, keySup) => {
        listLink.push(
            <ListItem key={keySup}>
                <ExpansionPanel
                    expanded={expanded === `panel${keySup}`}
                    onChange={handleChange(`panel${keySup}`)}
                >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${keySup}bh-content`}
                        id={`panel${keySup}bh-header`}
                    >
                        <Typography className={classesExp.heading}>{prop.icon}</Typography>
                        <Typography className={classesExp.heading}>{prop.name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <List>
                            {prop.collapses.map((route, key) => {
                                return (
                                    <Link
                                        to={prop.layout + prop.path + route.path}
                                        key={key}
                                        style={{ textDecoration: "none", color: "black" }}
                                        onClick={toggleDrawer}
                                    >
                                        <ListItem button>
                                            <ListItemIcon>{route.icon}</ListItemIcon>
                                            <ListItemText primary={route.name} />
                                        </ListItem>
                                    </Link>
                                );
                            })}
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </ListItem>
        );
    });
    return (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onKeyDown={toggleDrawer}
        >
            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
                open={open}
                onClose={toggleDrawer}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={toggleDrawer}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                                <ChevronRightIcon />
                            )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link
                        to="/admin/dashboard"
                        style={{ textDecoration: "none", color: "black" }}
                        onClick={toggleDrawer}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>{listLink}</List>
            </Drawer>
        </div>
    );
};

const useStylesExp = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: "33.33%",
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default SideBar;
