const fetch = require('node-fetch');

const baseURL = 'https://jobs.github.com/positions.json';

const fetchGithub = async () => {
  const res = await fetch(baseURL);
  const jobs = await res.json();
  console.log(jobs.length);
};

fetchGithub();

module.exports = fetchGithub;
