const express = require('express');

const app = express();
const port = process.env.PORT || 5000;


app.use('/', express.static(`${__dirname}/front/build`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/front/build/index.html'));
});

app.get('/api/yo', (req, res) => {
  res.send({ payload: 'Yo!!!' });
});



app.listen(port, () => console.log(`Listening on port ${port}, on ${app.get('env')}`));