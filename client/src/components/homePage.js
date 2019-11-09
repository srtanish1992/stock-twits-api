import React from 'react';
import axios from 'axios';

class HomePage extends React.Component {

    constructor(){
        super();
    }


    callApi = () => {

        axios.get('http://157.245.209.85:3006')
        .then(function (response) {
          // handle success
          console.log(response.data.messages[0]);
          console.log(response.data.messages[0].body);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    
      }

    render(){
        return(
            <button onClick={this.callApi}>Click Me!</button>
        )
    }
}

export default HomePage;