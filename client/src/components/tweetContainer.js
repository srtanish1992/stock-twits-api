import React from 'react';
import TweetItem from './tweetItem';

class TweetContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <TweetItem tweet={this.props.tweets}/>
        )
    }
}

export default TweetContainer;