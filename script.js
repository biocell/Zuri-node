var fs = require('fs');
var fetch = require('node-fetch');

var link = "http://jsonplaceholder.typicode.com/posts";

fetch(link)
    .then(res => res.json())
    .then(json => {
        var result = JSON.stringify(json)
        fs.writeFile('result/posts.json', result, (err) => {
            if (err) throw err;
            console.log("done");
        })
    });