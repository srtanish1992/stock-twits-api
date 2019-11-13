import React from 'react';
import TweetItem from './tweetItem';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: 60,
      marginTop: 50,
      marginRight:10,
      marginLeft: 10,
      marginBottom: 10,
      overflowX:'hidden',
      overflowY:'hidden',
      
    },
  }));
  

const TweetContainer = (props) => {

    const classes = useStyles();

    return (

        <div className={classes.root}>

            <Grid container spacing={2}>
            
                <TweetItem tweet={props.tweets}/>  

            </Grid>

        </div>
    )
}



export default TweetContainer;