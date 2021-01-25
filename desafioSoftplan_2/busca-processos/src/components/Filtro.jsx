import { makeStyles } from '@material-ui/core';
import React from 'react';
import InputFilter from './InputFilter';

const useStyles = makeStyles({
    column: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontFamily: 'Montserrat',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        fontFamily: 'Montserrat',
        flexDirection: 'row',
        margin:10,
        width:760,
    },
});

const Filtro = props => {
    
    const { children, position, title, filtrar, value } = props;
    const classes = useStyles();

    return (
        <>
            <div className={position === "row" ? classes.row : classes.column}>
                {position === "row" ? <p>{title}</p> : <h1>{title}</h1>}                
                <InputFilter filtrarDados={filtrar} filtro={value}/>
                {children}
            </div>
        </>
    );
}

export default Filtro;