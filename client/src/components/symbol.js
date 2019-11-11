import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray(props) {
  const classes = useStyles();

  

  return (
    
    <Paper className={classes.root}>

    
  
    {
      props.symbols.map(symbol=>{
        
          let icon;
  
          
            icon = <div>{symbol.count}</div>;
          

          return (
            <Chip
              icon={icon}
              label={symbol.symbol}
              key={symbol.symbol}
              // onClick={props.deleteTweet}
              onDelete={()=>props.deleteTweet(symbol)}
              className={classes.chip}
            />
          )
  

      })
    }
      
    </Paper>
  );
}


