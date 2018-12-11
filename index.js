import express from 'express';

var server = express();

server.get('/', (req, res) => {
  console.log('ok la i mak');
  res.send('HOMEPAGE');
});

server.get('/route/example', (req, res) => {
  console.log('yes its works from console.');
  res.send('hello there client');
});

server.listen(3000, () => {
  console.log('the server is up at port 3000')
});
