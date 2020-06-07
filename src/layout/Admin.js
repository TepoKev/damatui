import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Perfil from "../views/perfil/Perfil";
import Ajustes from "../views/ajustes/Ajustes";
import Bitacora from "../views/bitacora/Bitacora";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import routes from "../routes/routes";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

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
      <SideBar open={open} toggleDrawer={toggleDrawer} />
      <TopBar
        open={open}
        toggleDrawer={toggleDrawer}
        openNot={openNot}
        toggleNot={toggleNot}
      />
      <main className={classes.content}>
        <div className={classes.drawerHeader} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid className={classes.gridContainer}>
            {/* Aqui va el switch con las rutas y aca se colocaran las paginas (Aclople de componentes al layout)*/}
            <Switch>
              <Route path="/admin/dashboard" component={Dashboard} />
              <Route path="/admin/perfil" component={Perfil} />
              <Route path="/admin/ajustes" component={Ajustes} />
              <Route path="/admin/bitacora" component={Bitacora} />
              {arrayRouter}
            </Switch>
          </Grid>
          <Box pt={4}>
            <Footer />
          </Box>
        </Container>
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
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
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  gridContainer : {
    textAlign : 'center'
  }
}));
