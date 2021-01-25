import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Grid } from "@material-ui/core";
import EstruturaDaPagina from "../../components/EstruturaDaPagina";
import Section from "../../components/Section";
import { buscarProcessos } from '../../redux/processo/actions';
import Filtro from '../../components/Filtro';
import { useHistory } from "react-router-dom";

const PageFiltro = props => {
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(buscarProcessos());
    }, [dispatch]);

    const filtrar = filtro => {
        dispatch(buscarProcessos(filtro));
        history.push("/listagem",{response:filtro});
    }

    return (
        <EstruturaDaPagina>
            <Section>
                <Grid container spacing={2} >
                    <Grid item xs={11} >
                        <Grid item >
                            <Filtro 
                                filtrar={filtrar}
                                position="column"
                                title="Buscador de Processos"
                                >
                                <p>
                                    Você pode criar um novo processo
                                    <strong><Button component={Link} to="/cadastro"> clicando aqui. </Button></strong>
                                </p>
                            </Filtro>                                   
                        </Grid>
                    </Grid>
                </Grid>
            </Section>
        </EstruturaDaPagina>
    )
}

export default PageFiltro;