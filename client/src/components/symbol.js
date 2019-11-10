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

    console.log(props);

//   const handleDelete = chipToDelete => () => {
//     if (chipToDelete.label === 'React') {
//       alert('Why would you want to delete React?! :)');
//       return;
//     }

//     setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
//   };

  return (
    <Paper className={classes.root}>
      <Chip
        // icon={<FaceIcon />}
        label={props.symbol}
        // onClick={handleClick}
        // onDelete={handleDelete}
      />
    </Paper>
  );
}


