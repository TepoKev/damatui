import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Perfil from "../views/perfil/Perfil";
import Ajustes from "../views/ajustes/Ajustes";
import Bitacora from "../views/bitacora/Bitacora";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import routes from "../routes/routes";
import Container from "@material-ui/core/Container";

const drawerWidth = 240;

export default function Admin() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openNot, setOpenNot] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const toggleNot = () => {
    setOpenNot(!openNot);
  };
  var arrayRouter = [];
  routes.forEach((prop) => {
    arrayRouter.push(
      prop.collapses.map((route, key) => {
        return (
          <Route
            path={prop.layout + prop.path + route.path}
            component={route.component}
            key={key}
          />
        );
      })
    );
  });
  return (
    <div className={classes.root}>
      <CssBaseline />
      <SideBar open={open} toggleDrawer={toggleDrawer} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <TopBar open={open} toggleDrawer={toggleDrawer} openNot={openNot} toggleNot={toggleNot}/>
        <div className={classes.drawerHeader} />
        {/* Aqui va el switch con las rutas y aca se colocaran las paginas (Aclople de componentes al layout)*/}
        <Container>
          <Switch>
            <Route path="/admin/dashboard" component={Dashboard} />
            <Route path="/admin/perfil" component={Perfil} />
            <Route path="/admin/ajustes" component={Ajustes} />
            <Route path="/admin/bitacora" component={Bitacora} />
            {arrayRouter}
          </Switch>
        </Container>
        <Footer />
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "center",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
