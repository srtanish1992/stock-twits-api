import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TweetContainer from './tweetContainer';
import _ from 'lodash';


let allTweets = [];

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
        
        // console.log(inputStringArray);

        axios.get('http://localhost:5000', {
            params: {
              symbols: inputStringArray
            }
          })
          .then(response =>  {
            // console.log(response.data);
            for (let i = 0; i < response.data.length; i++){
                allTweets.push(response.data[i]);
            }

            let uniqueTweets = _.uniqBy(allTweets, 'id');
            
            this.setState({tweets:uniqueTweets});
            console.log(this.state.tweets);
          })
          .catch(error => {
            console.log(error);
          })

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

                {this.state.tweets.length > 0 && 
                    <TweetContainer tweets = {this.state.tweets}/>
                }
            </React.Fragment>


        )
    }
}


export default Input;