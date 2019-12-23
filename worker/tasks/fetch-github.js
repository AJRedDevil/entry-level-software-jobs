const fetch = require('node-fetch');
const redis = require('redis'),
  client = redis.createClient();
const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json';

const filterAlgo = ({title}) => {
  const jobTitle = title.toLowerCase();
  return !(
    jobTitle.includes('senior') ||
    jobTitle.includes('manager') ||
    jobTitle.includes('sr.') ||
    jobTitle.includes('architect')
  );
};

const fetchGithub = async () => {
  let resultCount = 1,
    onPage = 0;
  const allJobs = [];

  console.log('fetching jobs from Github');

  while (resultCount > 0) {
    const res = await fetch(`${baseURL}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log(`got ${resultCount} jobs`);
    onPage++;
  }

  console.log(`got ${allJobs.length} jobs`);

  // filter algo
  const jrJobs = allJobs.filter(filterAlgo);

  console.log(`filtered down to ${jrJobs.length}`);

  // set in redis
  const successs = await setAsync('github', JSON.stringify(jrJobs));

  console.log(successs);
};

module.exports = fetchGithub;
