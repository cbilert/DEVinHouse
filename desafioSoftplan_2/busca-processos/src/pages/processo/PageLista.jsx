import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Grid } from "@material-ui/core";
import EstruturaDaPagina from "../../components/EstruturaDaPagina";
import Section from "../../components/Section";
import Lista from "../../components/Lista";
import { buscarProcessos, excluirProcesso } from '../../redux/processo/actions';
import { getProcessos } from '../../redux/processo/selectors';
import Filtro from '../../components/Filtro';

const PageLista = props => {

    const processos = useSelector(getProcessos);
    const dispatch = useDispatch();

    useEffect(() => {
        const { state } = props.location;
        if( state ){
            dispatch(buscarProcessos(state.response));    
        } else {
            dispatch(buscarProcessos());
        }
    }, [dispatch]);

    const handleExcluirProcesso = processo => {
        dispatch(excluirProcesso(processo));
    }

    const filtrar = filtro => {
        dispatch(buscarProcessos(filtro));
    }

    return (
        <EstruturaDaPagina>
            <Section>
                <Grid container spacing={2} >
                    <Grid item xs={11} >
                        <Grid item >
                            <Filtro 
                                filtrar={filtrar}
                                position="row"
                                title="Buscador de Processos">
                                <Button variant="contained" component={Link} to="/cadastro">Novo</Button>
                            </Filtro>                                    
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Lista processos={processos} excluir={handleExcluirProcesso} />
                    </Grid>
                </Grid>
            </Section>
        </EstruturaDaPagina>
    )
}

export default PageLista;