let express = require('express');
let path = require('path');
let request = require('request');
let bodyParser = require('body-parser');


let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//let alexRoute = path.resolve("../alexFEC/client/dist");
let p = path.resolve("client", "dist");
app.use(express.static(p));

app.get('/suggested', (req, res) => {
  let id = req.query.prod_id;
  request("http://localhost:3001/suggested?prod_id="+id, (err, resp, body) =>{
    if (!err && resp.statusCode === 200) {
      res.status(200).send(body);
    }
  })
})


app.get("/reviews", (req, res) => {
  let id = req.query.prod_id;
  request(`http://localhost:3004/reviews?prod_id=${id}`, (err, resp, body) => {
    if (!err && resp.statusCode === 200){
      res.status(200).send(body);
    }
  })
})

app.get("/images", (req, res) => {
  let id = req.query.id;
  request(`http://localhost:3003/images?id=${id}`, (err, resp, body) => {
    if (!err && resp.statusCode === 200) {
      res.status(200).send(body);
    }
  })
})





app.listen(3000 || process.env.PORT, () => {
  console.log('On port 3000');
});