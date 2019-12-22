import React from 'react';
import './App.css';

import Jobs from './Jobs';

const mockJobs = [
  {title: 'SME 1', company: 'Facebook'},
  {title: 'SME 1', company: 'Google'},
  {title: 'SME 1', company: 'Apple'},
];

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
