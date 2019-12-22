const express = require('express');
const redis = require('redis'),
  client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);

const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Jobs API!'));
app.get('/jobs', async (req, res) => {
  const jobs = await getAsync('github');
  return res.send(jobs);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
