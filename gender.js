var axios = require('axios');
var { api_key } = require('./api_key')

var name = 'Arun';

var url = `https://gender-api.com/get?name=${name}&key=${api_key.key}`;

axios.get(url).then(function(response) {
    //console.log(response); /*-> will object as output which has multile objects inside but needed details alwasy be in data so we are referring to that object*/
    console.log(`The gender of ${response.data.name} is ${response.data.gender}`);
}).catch(function(err) {
    console.log(err.code);
});

//