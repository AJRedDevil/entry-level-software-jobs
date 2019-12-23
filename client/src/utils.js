import {stateNames, stateAbbrevs, USCityNames} from './constants';

const jobIsRemote = job =>
  job.location.toLowerCase().includes('remote') ||
  job.location.toLowerCase().includes('anywhere');
const jobIsInUs = job => {
  return (
    stateNames.some(stateName =>
      job.location.toLowerCase().includes(stateName.toLowerCase())
    ) ||
    stateAbbrevs.some(stateAbbrev => {
      const abbrev = new RegExp(`\\b${stateAbbrev}\\b`, 'gi');
      return abbrev.test(job.location);
    }) ||
    USCityNames.some(cityName => {
      return job.location.toLowerCase().includes(cityName.toLowerCase());
    })
  );
};
const jobIsNotInUS = job => {
  return (
    stateNames.every(
      state => !job.location.toLowerCase().includes(state.toLowerCase())
    ) &&
    stateAbbrevs.every(stateAbbrev => {
      const abbrev = new RegExp(`\\b${stateAbbrev}\\b`, 'gi');
      return !abbrev.test(job.location);
    }) &&
    USCityNames.every(cityName => {
      return !job.location.toLowerCase().includes(cityName.toLowerCase());
    }) &&
    !jobIsRemote(job)
  );
};

export const filterJobsByLocation = (jobs, location) => {
  switch (location) {
    case 'us':
      return jobs.filter(jobIsInUs);
    case 'international':
      return jobs.filter(jobIsNotInUS);
    case 'remote':
      return jobs.filter(jobIsRemote);
    default:
      return jobs;
  }
};
