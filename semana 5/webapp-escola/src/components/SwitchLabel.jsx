import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const SwitchLabel = props => {
    const {label, name, checked, color, onChange, onFocus, error, helperText} = props;
    
  return (
      <FormControlLabel
        control={
            <Switch
                checked={checked}
                onFocus={onFocus}
                error={error}
                helpertext={helperText}
                color={color}
                name={name}
                onChange={onChange}
            />}
        label={label}
      />
  );
}
export default SwitchLabel;