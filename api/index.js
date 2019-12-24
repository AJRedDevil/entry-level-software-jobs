const express = require('express');
const redis = require('redis'),
  client = redis.createClient(
    6379,
    process.env.NODE_ENV === 'docker' ? 'redis' : 'localhost'
  );
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

const app = express();
const port = 5000;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => res.send('Jobs API!'));
app.get('/api/jobs', async (req, res) => {
  const jobs = await getAsync('github');
  return res.send(jobs);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
