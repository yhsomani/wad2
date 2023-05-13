const express = require('express');
const abc = express();

const path = require("path")

const PORT = 8000

abc.use(express.static('public'));

// abc.get('/', function(req, res) {
//     res.send('Hello World!');
// });
abc.get('/', function (req, res) {
    res.render('./public/a.html')
});

abc.listen(PORT, function () {

    console.log(`Server listening on port::${PORT}`);

});