let express = require('express');
let path = require('path');
let request = require('request');
let bodyParser = require('body-parser');


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let alexRoute = path.resolve("../alexFEC/client/dist");
app.use(express.static(alexRoute));

app.get("/data", (req, res) => {
  request("http://localhost:3001/data", (err, resp, body) => {
    let bod = JSON.parse(body);
    res.send(bod).status(200);
  })
})





app.listen(3000 || process.env.PORT, () => {
  console.log('On port 3000');
});