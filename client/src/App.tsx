import * as React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import Home from './components/Home';
import Work from './components/Work';
import Life from './components/Life';
import Blog from './components/Blog';
import Connect from './components/Connect';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    display: 'flex',
  },
  toolbarTitle: {
      underline: 'none',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 1,
    textDecoration: 'none',
    color: 'black',
  },
  toolbarTitleLink: {
      textDecoration: 'none',
      color: 'black',
  },
  toolbarSectionGroup : {
      marginLeft: 'auto',
  }
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Router>
        <CssBaseline />
        <Toolbar className={classes.toolbar}>
          <Link
            key="title"
            to="/"
            className={classes.toolbarTitleLink}
          >
            <Typography
              component="h2"
              variant="h5"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              Simon Teo
            </Typography>
          </Link>
          <div className={classes.toolbarSectionGroup}>
            <Link
              key="work"
              to="/work"
              className={classes.toolbarLink}
            >
              Work
            </Link>
            <Link
              key="life"
              to="/life"
              className={classes.toolbarLink}
            >
              Life
            </Link>
            <Link
              key="blog"
              to="/blog"
              className={classes.toolbarLink}
            >
              Blog
            </Link>
            <Link
              key="connect"
              to="/connect"
              className={classes.toolbarLink}
            >
              Connect
            </Link>
          </div>
        </Toolbar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/work" exact component={Work} />
          <Route path="/life" exact component={Life} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/connect" exact component={Connect} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
