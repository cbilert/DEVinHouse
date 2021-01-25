import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      fontFamily: 'Montserrat',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 450,
    },
    input: {
      fontFamily: 'Montserrat',
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  }));

const InputFilter = props => {
    const classes = useStyles();
    const { filtrarDados } = props;

    const [ filtro, setFiltro ] = useState();

    return (
        <>
            <Paper component="form" className={classes.root}>
                <InputBase
                    className={classes.input}
                    value={filtro}
                    placeholder="Pesquise por uma informação do processo"
                    inputProps={{ 'aria-label': 'Pesquise por uma informação do processo' }}
                    onChange={(e) => setFiltro(e.target.value)}
                />
                <IconButton 
                    // type="submit" 
                    className={classes.iconButton} 
                    aria-label="search"
                    onClick={() => filtrarDados(filtro)}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </>
    )
}

export default InputFilter;