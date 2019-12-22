const fetch = require('node-fetch');
const redis = require('redis'),
  client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json';

const fetchGithub = async () => {
  let resultCount = 1,
    onPage = 0;
  const allJobs = [];

  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log(`got ${resultCount} jobs`);
    onPage++;
  }

  console.log(`got ${allJobs.length} jobs`);
  const successs = await setAsync('github', JSON.stringify(allJobs));

  console.log(successs);
};

fetchGithub();

module.exports = fetchGithub;
