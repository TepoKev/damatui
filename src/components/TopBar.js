import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import SecurityIcon from "@material-ui/icons/Security";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Notifications from "./Notifications";
import { Link } from "react-router-dom";
import { useStylesTopBar } from "../layout/Styles";

const TopBar = ({ open, toggleDrawer }) => {
    const classes = useStylesTopBar();
    /**
     * si no se quiere cargar el sidebar de entrada, solo poner false al useState
     */
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElNoti, setAnchorElNoti] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickNotifi = (event) => {
        setAnchorElNoti(event.currentTarget);
    };
    const handleCloseNotifi = () => {
        setAnchorElNoti(null);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link
                to={"/admin/perfil"}
                onClick={handleMenuClose}
                style={{ textDecoration: "none", color: "black" }}
            >
                <MenuItem>
                    <PersonIcon />
                    Perfil
                </MenuItem>
            </Link>
            <Link
                to={"/admin/ajustes"}
                onClick={handleMenuClose}
                style={{ textDecoration: "none", color: "black" }}
            >
                <MenuItem>
                    <BuildIcon />
                    Ajustes y <SecurityIcon /> Seguridad
                </MenuItem>
            </Link>
            <Link
                to={"/admin/bitacora"}
                onClick={handleMenuClose}
                style={{ textDecoration: "none", color: "black" }}
            >
                <MenuItem>
                    <ReceiptIcon />
                    Registro de Actividad
                </MenuItem>
            </Link>
            <Link
                to={"/"}
                onClick={handleMenuClose}
                style={{ textDecoration: "none", color: "black" }}
            >
                <MenuItem onClick={handleMenuClose}>
                    <ExitToAppIcon />
                    Cerrar Sesión
                </MenuItem>
            </Link>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMenuClose}
        >
            <Link
                to={"/"}
                onClick={handleMenuClose}
                style={{ textDecoration: "none", color: "black" }}
            >
                <MenuItem>
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notificaciones</p>
                </MenuItem>
            </Link>
            <Link
                to={"/admin/perfil"}
                onClick={handleMenuClose}
                style={{ textDecoration: "none", color: "black" }}
            >
                <MenuItem onClick={handleMenuClose}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Perfil</p>
                </MenuItem>
            </Link>
            <Link
                to={"/admin/ajustes"}
                onClick={handleMenuClose}
                style={{ textDecoration: "none", color: "black" }}
            >
                <MenuItem onClick={handleMenuClose}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <BuildIcon />
                    </IconButton>
                    <p>Ajustes y <SecurityIcon /> Seguridad</p>
                </MenuItem>
            </Link>
            <Link
                to={"/admin/bitacora"}
                onClick={handleMenuClose}
                style={{ textDecoration: "none", color: "black" }}
            >
                <MenuItem onClick={handleMenuClose}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <ReceiptIcon />
                    </IconButton>
                    <p>Registro de Actividad</p>
                </MenuItem>
            </Link>
            <Link
                to={"/"}
                onClick={handleMenuClose}
                style={{ textDecoration: "none", color: "black" }}
            >
                <MenuItem onClick={handleMenuClose}>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <ExitToAppIcon />
                    </IconButton>
                    Cerrar Sesión
                </MenuItem>
            </Link>
        </Menu>
    );

    return (
        <>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link
                        to="/admin/dashboard"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <Typography variant="h6" noWrap>Damatui</Typography>
                    </Link>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-label="show 17 new notifications"
                            color="inherit"
                            onClick={handleClickNotifi}
                        >
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Notifications
                anchorElNoti={anchorElNoti}
                handleCloseNotifi={handleCloseNotifi}
            />
            {renderMobileMenu}
            {renderMenu}
        </>
    );
};

export default TopBar;
