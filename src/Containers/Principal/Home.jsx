import React, { useContext, useEffect } from 'react';
import LayoutDashboard from '../../Components/Layout/LayoutDashboard';
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles'; 
import Container  from '@material-ui/core/Container';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(18),
    paddingBottom: theme.spacing(4),
    paddingInlineEnd: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    background: '#ff9800',
    marginTop: theme.spacing(9),
  },
  paper2: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    background: '#6200ea',
    marginTop: theme.spacing(5),
  },
  paper3: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    background: '#f06292',
    marginTop: theme.spacing(5),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBlockEnd: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: 'none',
  },
  
}));

const Home = props => {
  const classes = useStyles();
  
  
  
  

  return (
    <LayoutDashboard>
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}><Typography align='center' variant="h2" component="h2">ECUACION DIFERENCIAL</Typography></Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper2}><Typography align='center' variant="h3" component="h4">y'= y(x-1)</Typography></Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper3}><Typography align='center' variant="h3" component="h4">Condición Inicial y(0)= 2</Typography></Paper>
              </Grid>
          </Grid>
      </Container>
    </main>
  </div > 
  </LayoutDashboard>
);
}

export default Home;