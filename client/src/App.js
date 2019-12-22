import React from 'react';
import './App.css';

import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:5000/jobs';

const mockJobs = [
  {title: 'SME 1', company: 'Facebook'},
  {title: 'SME 1', company: 'Google'},
  {title: 'SME 1', company: 'Apple'},
];

const fetchJobs = async () => {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  console.log({json});
};

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
