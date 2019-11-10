import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TweetContainer from './tweetContainer';
import Symbol from './symbol';
import _ from 'lodash';


let allTweets = [];

class Input extends React.Component {

    

    constructor(){
        super();
        this.state = {
            tweets: [],
            inputString: '',
            inputStringArray:[]
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
        this.setState({inputStringArray});
        
        // console.log(inputStringArray);

        axios.get('http://localhost:5003', {
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

    deleteTweets =(s) => {
        console.log(s);
        const tweets = this.state.tweets.filter(tweet => !tweet.body.toUpperCase().includes(`$${s}`));
        console.log(tweets);
        this.setState({tweets});
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

                {this.state.inputStringArray.length > 0 &&
                    <Symbol 
                    symbols = {this.state.inputStringArray}
                    deleteTweet = {this.deleteTweets}
                    />
                }

                {this.state.tweets.length > 0 && 
                    <TweetContainer 
                    tweets = {this.state.tweets}
                    />
                }
            </React.Fragment>


        )
    }
}


export default Input;