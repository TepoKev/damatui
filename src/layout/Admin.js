import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
const drawerWidth = 240;
export default function Admin() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopBar open={open} toggleDrawer={toggleDrawer} />
      <SideBar open={open} toggleDrawer={toggleDrawer} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* Aqui va el switch con las rutas y aca se colocaran las paginas */}
        <Switch>
          <Route path="/admin/dashboard" component={Dashboard} />
          {/* Aca van las rutas del array */}
        </Switch>
        <Footer />
      </main>
    </div >
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));