import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TweetContainer from './tweetContainer';
import Symbol from './symbol';
import _ from 'lodash';




class Input extends React.Component {

    

    constructor(){
        super();
        this.state = {
            allTweets:[],
            tweets: [],
            inputString: '',
            inputStringArray:[],
            symbolCounts:[]
        }
        
    }

    handleChange = (e) => {
        this.setState({inputString:e.target.value});
    }

    splitInputString = () => {
        return this.state.inputString.replace(/\s/g, '').toUpperCase().split(",");
    }

    

    getTweets = () => {
        const stringArray = this.state.inputStringArray;

        const splitString = this.splitInputString();

        for(let i = 0; i < splitString.length ; i++) {
            if(!stringArray.includes(splitString[i]))
                stringArray.push(splitString[i])
        }
        this.setState({inputStringArray:stringArray});
        
        // console.log(inputStringArray);

        axios.get('http://157.245.209.85:5004', {
            params: {
              symbols: this.state.inputStringArray
            }
          })
          .then(response =>  {
            // console.log(response.data);
            for (let i = 0; i < response.data.allTweets.length; i++){
                this.state.allTweets.push(response.data.allTweets[i]);
            }

            let uniqueTweets = _.uniqBy(this.state.allTweets, 'id');
            
            this.setState({tweets:uniqueTweets});
            this.setState({symbolCounts:response.data.symbolCounts});
          })
        //   .then(response => {
        //       this.getCount();
        //   })
          .catch(error => {
            console.log(error);
          })

    }

    deleteTweets =(s) => {
        console.log(s);
        const tweets = this.state.tweets.filter(tweet => !tweet.body.toUpperCase().includes(`$${s.symbol}`));
        console.log(tweets);

        const symbolCountsArray = this.state.symbolCounts;

        const inputStringArray = this.state.inputStringArray;

        for (let i = 0; i < symbolCountsArray.length; i++){
            if (symbolCountsArray[i].symbol === s.symbol)
                symbolCountsArray.splice(i,1);
        }

        for (let i = 0; i < inputStringArray.length; i++){
            if (inputStringArray[i] === s.symbol)
                inputStringArray.splice(i,1);
        }

        this.setState({tweets,allTweets:tweets,symbolCounts : symbolCountsArray,inputStringArray});
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

                {this.state.symbolCounts.length > 0 &&
                    <Symbol 
                        symbols = {this.state.symbolCounts}
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