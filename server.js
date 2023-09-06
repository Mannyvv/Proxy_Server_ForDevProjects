const express = require('express');
const axios = require('axios');
const app = express()
const port = 3005
const host = "0.0.0.0"



app.get('/search', (req, res) => {
  searchTerm = req.query.q
  console.log(req.query.q)
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )

  //const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
  //Use your personal API key(current API expired)
  const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDGOedEhSH-6FHSDEKvuKQy-99GWVppul4`


  axios.get(apiURL)
    .then(respo => {
      const data = respo.data;
      //res.json(data);
      res.set('Content-Type', 'application/json')
      res.send(data)

    })
    .catch(error => {
      //Handle any errors that occurred during the API call
      console.error('API call error:', error);
      res.status(500).json({ error: 'Failed to fetch data from the external API.' });
    });
});

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("We are open for business");
})