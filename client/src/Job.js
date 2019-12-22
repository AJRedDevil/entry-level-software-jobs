import React from 'react';
import {Paper, Typography} from '@material-ui/core';

export default function Job({job, onClick}) {
  return (
    <Paper onClick={onClick} className="job">
      <div className="flex-align-md">
        <div className="job-title-location ">
          <Typography variant="h6">{job.title}</Typography>
          <Typography variant="h5">{job.company}</Typography>
          <Typography>{job.location}</Typography>
        </div>
      </div>
      <div className="flex-align-md">
        <Typography>
          {job.created_at
            .split(' ')
            .slice(0, 3)
            .join(' ')}
        </Typography>
      </div>
    </Paper>
  );
}
