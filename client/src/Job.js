import React from 'react';
import {Paper, Typography} from '@material-ui/core';

export default function Job({job}) {
  return (
    <Paper className="job">
      <Typography>{job.title}</Typography>
      <Typography>{job.company}</Typography>
    </Paper>
  );
}
