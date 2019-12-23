import React from 'react';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function LocationRadio({value, handleChange}) {
  return (
    <Paper className="location">
      <div className="flex-align-md">
        <FormControl component="fieldset">
          <FormLabel component="legend">Location</FormLabel>
          <RadioGroup
            aria-label="position"
            name="location"
            value={value}
            onChange={handleChange}
            row
            color="default"
          >
            <FormControlLabel
              value="all"
              control={<Radio color="default" />}
              label="All"
              labelPlacement="start"
            />
            <FormControlLabel
              value="us"
              control={<Radio color="default" />}
              label="U.S."
              labelPlacement="start"
            />
            <FormControlLabel
              value="international"
              control={<Radio color="default" />}
              label="International"
              labelPlacement="start"
            />
            <FormControlLabel
              value="remote"
              control={<Radio color="default" />}
              label="Remote"
              labelPlacement="start"
            />
          </RadioGroup>
        </FormControl>
      </div>
    </Paper>
  );
}
