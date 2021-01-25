import React, { useState } from 'react';
import { Grid, IconButton, InputLabel, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/AddCircle';

const Interessados = props => {
    const { interessados, adicionarInteressado } = props;

    const [interessado, setInteressado] = useState('');
    const handleAdicionarInteressado = () => {
        const dadosInteressado = {
            interessado: interessado
        }
        adicionarInteressado(dadosInteressado);
        resetarDadosAtor();
    }

    const resetarDadosAtor = () => {
        setInteressado('');
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={11} ><InputLabel>Interessados:</InputLabel></Grid>
            <Grid item xs={11} style={{marginLeft: 25}}>
                <TextField label="Interessado" value={interessado} onChange={e => setInteressado(e.target.value)} variant="outlined" size="small" style={{width: 300}} />
                <IconButton color="primary" onClick={() => handleAdicionarInteressado()}>
                    <AddIcon />
                </IconButton>
                <Grid container spacing={1}>
                    {interessados && interessados.length > 0 && 
                        interessados.map(i => 
                            <Grid item xs={11} key={i.interessado}>
                                <InputLabel>{`Interessado: ${i.interessado}`}</InputLabel>
                            </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Interessados;