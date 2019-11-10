const axios = require('axios');

module.exports = function(app) {

    app.get('/', function(req,res,next){

        console.log(req.query.symbols);

        axios.get(`https://api.stocktwits.com/api/2/streams/symbol/${req.query.symbols[1]}.json`)
        .then(response => {
            // handle success
            res.send(response.data);
        })
        .catch(error => {
            // handle error
            console.log(error);
        })

    });

}