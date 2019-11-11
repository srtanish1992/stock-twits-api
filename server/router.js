const axios = require('axios');
var _ = require('lodash');

module.exports = function(app) {

    
    

    app.get('/', function(req,res,next){

        let allTweets = [];

        // let uniqueTweets = [];

        let requests = []
        let  symbolCounts = [];

        console.log(req.query.symbols);

        for (let i =0 ; i < req.query.symbols.length; i++) {
            requests.push(axios.get(`https://api.stocktwits.com/api/2/streams/symbol/${req.query.symbols[i]}.json`));
        }

        axios.all(requests).then(axios.spread((...responses) => {
            for (let i =0 ; i < responses.length; i++) {
                allTweets.push(...responses[i].data.messages);
                let symbolCount = {
                    symbol:responses[i].data.symbol.symbol,
                    count: responses[i].data.messages.length
                }

                // console.log(responses[i].data.symbol.symbol);

                symbolCounts.push(symbolCount)
            }
            // console.log(allTweets[0]);
            // uniqueTweets = _.uniqBy(allTweets, 'id');
            // use/access the results
            res.send({allTweets:allTweets,symbolCounts:symbolCounts}); 
          })).catch(error => {
            // react on errors.
            console.log(error);
          })


    });

}