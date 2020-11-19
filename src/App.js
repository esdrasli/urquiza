import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import logo from './assets/login/logoUrquiza.png';
import art from './assets/login/artLogin.png';
import dev from './assets/login/logoDev.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <Grid container spacing={3}>
        
          <img src={logo} alt={logo} width = "1000px" height = "300px" />
          
          
        <Grid item xs={3}>
          
          <img src={art} alt={art} />
          
        </Grid>
        
      </Grid>
      Produzido por:<img src={dev} alt={dev} gwidth = "40px" heiht = "30px" />

    </div>
  );
}