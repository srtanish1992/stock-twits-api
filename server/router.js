const axios = require('axios');
const url = 'https://api.stocktwits.com/api/2/streams/symbol/AAPL.json';

module.exports = function(app) {

    app.get('/', function(req,res,next){

        axios.get(url)
        .then(function (response) {
            // handle success
            res.send(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    });

}