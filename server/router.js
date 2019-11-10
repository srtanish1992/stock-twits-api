const axios = require('axios');

module.exports = function(app) {

    app.get('/', function(req,res,next){

        console.log(req.query);

        axios.get(`https://api.stocktwits.com/api/2/streams/symbol/${req.query.tweetSymbol}.json`)
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