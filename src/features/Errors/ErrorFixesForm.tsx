import { FormControl, FormHelperText, makeStyles, MenuItem, Select } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ErrorFixesForm(): JSX.Element {
  const classes = useStyles();
  const [ageRange, setAgeRange] = useState<string>('0-18');

  const handleAgeRangeChange = (event: React.ChangeEvent<{ name?: string, value: unknown}>) => {
    // setAgeRange(event.target.value);
    setAgeRange(typeof event.target.value === 'string' ? event.target.value : '');
  };
  
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={ageRange}
          onChange={handleAgeRangeChange}
          inputProps={{ readOnly: true }}>
          <MenuItem value={'0-18'}>0-18</MenuItem>
          <MenuItem value={'19-65'}>19-65</MenuItem>
          <MenuItem value={'66-'}>66-</MenuItem>
        </Select>
        <FormHelperText>Age Range</FormHelperText>
      </FormControl>
    </div>
  );
};
