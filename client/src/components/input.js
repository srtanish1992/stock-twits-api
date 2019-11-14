import React from 'react';
import axios from 'axios';
import TweetContainer from './tweetContainer';
import Symbol from './symbol';
import _ from 'lodash';
import styled from 'styled-components';


const MyInput = styled.input`
    width: 30%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    @media screen and (max-width: 768px){
        width: 90%;
    }
`;

const MyButton = styled.button`
    width:130px;
    background-color: darkslategrey;
    border: none;
    color: white;
    padding: 11px 32px;
    text-decoration: none;
    margin: 4px 29px;
    cursor: pointer;
    border-radius: 4px;

    @media screen and (max-width: 768px){
        margin-top: 30px
    }
`;

const divStyle = {
    textAlign:'center',
    marginTop: 50
}

const NoResult = styled.div`
    text-align:center;
    font-size:24px;
    color:red
    @media screen and (max-width: 768px){
        margin-top: 30px
    }
`;

class Input extends React.Component {

    

    constructor(){
        super();
        this.state = {
            allTweets:[],
            tweets: [],
            inputString: '',
            inputStringArray:[],
            symbolCounts:[],
            showNoResults : false

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

        axios.get('http://157.245.209.85:5005', {
            params: {
              symbols: this.state.inputStringArray
            }
          })
          .then(response =>  {

            if (response.data.responseErr === true){
                this.setState({showNoResults: true,inputStringArray:[]})
            }
            else {
                for (let i = 0; i < response.data.allTweets.length; i++){
                    this.state.allTweets.push(response.data.allTweets[i]);
                }
    
                let uniqueTweets = _.uniqBy(this.state.allTweets, 'id');

                for (let i = 0; i < response.data.symbolCounts.length; i++){
                    this.state.symbolCounts.push(response.data.symbolCounts[i]);
                }

                let uniqueSymbols = _.uniqBy(this.state.symbolCounts, 'symbol');
                
                this.setState({tweets:uniqueTweets,symbolCounts:uniqueSymbols,showNoResults: false,inputString:''});
                
            }
            
          })
          .catch(error => {
            console.log(error);
          })

    }

    deleteTweets =(s) => {
        const tweets = this.state.tweets.filter(tweet => !tweet.body.toUpperCase().includes(`$${s.symbol}`));

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
                <div style={divStyle}>

                    <img alt = "" src ="data:image/png;base64,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" />
                
                    <MyInput value = {this.state.inputString} onChange={this.handleChange}/>
                
                    <MyButton
                        onClick ={this.getTweets}
                    >
                        Search
                    </MyButton>

                </div>

                {
                    this.state.showNoResults &&

                        <NoResult>
                            No results. Please check the stock symbol/symbols input, there could be a typo or the symbol doesn't exist.
                        </NoResult>
                }

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