import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Input extends React.Component {
    render(){
        return(

            <React.Fragment>
                <div>
                    <TextField
                        id="outlined-basic"
                        // className={classes.textField}
                        label="Outlined"
                        margin="normal"
                        variant="outlined"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button 
                        variant="outlined" 
                        // className={classes.button}
                        >
                        Search
                    </Button>
                </div>
            </React.Fragment>


        )
    }
}


export default Input;