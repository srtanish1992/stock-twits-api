import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TweetContainer from './tweetContainer';

class Input extends React.Component {

    constructor(){
        super();
        this.state = {
            tweets: [],
            inputString: ''
        }
    }

    handleChange = (e) => {
        this.setState({inputString:e.target.value});
    }

    splitInputString = () => {
        return this.state.inputString.replace(/\s/g, '').split(",");
    }

    getTweets = () => {
        let inputStringArray = this.splitInputString();
        console.log(inputStringArray);
    }

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
                        onChange={this.handleChange}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button 
                        variant="outlined" 
                        // className={classes.button}
                        onClick ={this.getTweets}
                        >
                        Search
                    </Button>
                </div>

                {this.state.tweets > 0 && 
                    <TweetContainer tweets = {this.state.tweets}/>
                }
            </React.Fragment>


        )
    }
}


export default Input;