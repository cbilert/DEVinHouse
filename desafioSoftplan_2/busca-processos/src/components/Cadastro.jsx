import { Field, Form, Formik } from "formik";
import * as yup from 'yup';
import { Button, Grid, TextField } from '@material-ui/core';
import Interessados from './Interessados';
import { PROCESSO_INICIAL } from "../util/constantes";
import { useState } from "react";
import { useHistory } from "react-router-dom";


const ProcessoSchema = yup.object().shape({
    assunto: yup.string().required('Informe o Assunto do processo!'),
    descricao: yup.string().required('Informe uma descrição para o processo')
})

const Cadastro = props => {
    const { processo, salvar, limpar } = props;

    const [teveAlteracao, setTeveAlteracao] = useState(false);
    const history = useHistory();

    

    const salvarProcesso = (processo, actions) => {
        actions.setSubmitting(true);
        salvar(processo);
        actions.resetForm();
        actions.setSubmitting(false);
        setTeveAlteracao(false);
        history.push("processos/listagem");
    }

    const handleChange = (name, value, setFieldValue) => {
        setTeveAlteracao(true);
        setFieldValue(name, value);
    }

    const handleNovo = (handleReset) => {
        limpar();
        handleReset(PROCESSO_INICIAL);
    }

    const voltar = () => {
        history.goBack();
    }

    const adicionarInteressado = (interessado, name, values, setFieldValue) => {
        const interessados = values[name];
        interessados.push(interessado);
        setFieldValue(name, interessados);
        setTeveAlteracao(true);
    }

    return (
        <Formik 
            enableReinitialize
            validateOnMount={true}
            validationSchema={ProcessoSchema}
            initialValues={ processo || PROCESSO_INICIAL}
            onSubmit={(values, actions) => salvarProcesso(values, actions)}
            render={({ values, touched, errors, isSubmitting, handleReset, setFieldTouched, setFieldValue }) => (
                <Form>
                    <Grid container spacing={3}>
                        <Grid item xs={11}>
                            <Field
                                component={TextField}
                                fullWidth
                                size="small"
                                name="assunto"
                                label="Assunto"
                                value={values.assunto}
                                variant="outlined"
                                onFocus={() => setFieldTouched('assunto')}
                                onChange={e => handleChange('assunto', e.target.value, setFieldValue)}
                                error={touched.assunto && errors.assunto}
                                helperText={touched.assunto && errors.assunto}
                            />
                        </Grid>                            
                        <Grid item xs={11}>
                            <Field
                                component={Interessados}
                                fullWidth
                                size="small"
                                name="interessados"
                                elenco={values.interessados}
                                adicionarInteressado={interessado => adicionarInteressado(interessado, 'interessados', values, setFieldValue)}
                                onChange={e => handleChange('interessados', e.target.value, setFieldValue, setFieldTouched)}
                                onFocus={() => setFieldTouched('interessados')}
                            />
                        </Grid>
                        <Grid item xs={11}>
                            <Field
                                component={TextField}
                                multiline
                                fullWidth
                                size="small"
                                name="descricao"
                                value={values.descricao}
                                onChange={e => handleChange('descricao', e.target.value, setFieldValue)}
                                onFocus={() => setFieldTouched('descricao')}
                                label="Descricao"
                                variant="outlined"
                                error={touched.descricao && errors.descricao}
                                helperText={touched.descricao && errors.descricao}
                            />
                        </Grid>
                        <Grid item xs={11} >
                            <Grid container spacing={2} justify="flex-end">
                                <Grid item >
                                    <Button variant="contained" onClick={voltar}>Voltar</Button>
                                </Grid>
                                <Grid item >
                                    <Button variant="contained" onClick={() => {handleNovo(handleReset)}}>Novo</Button>
                                </Grid>
                                <Grid item >
                                    <Button variant="contained" color="primary" type="submit" disabled={isSubmitting || !teveAlteracao}>Salvar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Form>
            )}
        />
    );
}
export default Cadastro;