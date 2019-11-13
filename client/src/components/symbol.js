import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  chip: {
    marginTop: 30,
    padding: 5,
    marginLeft: 10,
    backgroundColor:'green'
  },
}));

const divStyle = {
  textAlign: 'center'
}

export default function ChipsArray(props) {
  const classes = useStyles();

  

  return (
    
    <div style ={divStyle}>
  
    {
      props.symbols.map(symbol=>{
        
          let icon,sym;
  
          
            icon = <div style={{color:'white', fontWeight:'bold'}}>{symbol.count}</div>;
            sym = <div style={{color:'white', fontWeight:'bold'}}>{symbol.symbol}</div>;
          

          return (
            <Chip
              icon={icon}
              label={sym}
              key={symbol.symbol}
              onDelete={()=>props.deleteTweet(symbol)}
              className={classes.chip}
            />
          )
  

      })
    }
      
    </div>
  );
}


