import { Grid, IconButton, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const Filtro = props => {
    const {label, name, value, color, onChange, onFocus, error, helperText, lista,callbackFilter} = props;

    const handleFind =(val) => {
        console.log("Filter value: ",val.value)
        callbackFilter(lista[1]);
    }
    
  return (
      <Grid container>
          <TextField
              value={value}
              onFocus={onFocus}
              error={error}
              helpertext={helperText}
              color={color}
              name={name}
              onChange={onChange}
              variant="outlined"
              size="small"
              label={label}
          />
          <IconButton  color="primary" onClick={() => handleFind({value})}>
              <SearchIcon/>
          </IconButton>
      </Grid>
  );
}
export default Filtro;