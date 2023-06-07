import React from 'react';
import { TextField, Autocomplete as AutoField } from '@mui/material';

// eslint-disable-next-line react/display-name
const Autocomplete = React.forwardRef((props, ref) => {
  const {
    options,
    getOptionLabel,
    onInputChange,
    placeholder,
    value,
    inputValue,
    onChange,
    sx,
    ...other
  } = props;

  return (
    <AutoField
      disablePortal
      options={options}
      onInputChange={(event) => {
        onInputChange(event?.target?.value);
      }}
      {...other}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextField placeholder={placeholder} {...params} />
      )}
    />
  );
});

export default Autocomplete;
