const fetch = require('node-fetch');

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
};

fetchGithub();

module.exports = fetchGithub;
