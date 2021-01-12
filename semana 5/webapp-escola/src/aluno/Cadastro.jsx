import React from 'react';
import { Component } from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core';
import { KeyboardDatePicker,MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import CheckBoxSwitch from '../components/CheckBoxSwitch';


const ALUNO_INICIAL= {
    nome:'',
    responsavel:'',
    dtNascimento: null,
    telResponsavel:'',
    emergenciaAvisar:'',
    telEmergencia:'',
    possuiRestricaoAlimentar: false,
    descRestricaoAlimentar:'',
    autorizaFotoVideoUsoEscolar: false,
    autorizadosBuscarCrianca:'',
    turma:'',
    observacoesAdicionais:''
};

const ALUNO_SCHEMA = yup.object().shape({
    nome: yup.string().required('Informe o nome do aluno.'),
    responsavel:yup.string().required('Informe o responsável pelo aluno.'),
    dtNascimento:yup.date().required('Informe a data de nascimento.'),
    telResponsavel:yup.string().required('Informe o telefone de contato do responsável pelo aluno.'),
    emergenciaAvisar:yup.string().required('Informe quem será avisado em caso de emergência.'),
    telEmergencia:yup.string().required('Informe o telefone de contato para emergência.'),
    possuiRestricaoAlimentar:yup.boolean().required('Informe se possui restrição alimentar.'),
    descRestricaoAlimentar: yup.string(),
    autorizaFotoVideoUsoEscolar:yup.boolean().required('Informe se autoriza o uso de foto e video para uso escolar.'),
    autorizadosBuscarCrianca:yup.string().required('Informe quem está autorizado a buscar a criança'),
    turma:yup.string().required('Informe a turma'),
    observacoesAdicionais: yup.string()
});

class CadastroAlunos extends Component {

    state = { teveAlteracao: false, checked:false }
    
    salvar = (aluno, actions) => {
        actions.setSubmitting(true);
        this.props.salvar(aluno);
        actions.resetForm();
        actions.setSubmitting(false);
        this.setState({teveAlteracao: false});
    }
    
    handleChange = (name, value, setFieldValue) => {
        this.setState({teveAlteracao: true, checked:value.checked});
        setFieldValue(name,value);
    }

    render() {
        return (
            <Formik 
                enableReinitialize
                validateOnMount={true}
                validationSchema={ALUNO_SCHEMA}
                initialValues={ this.props.aluno || ALUNO_INICIAL } 
                onSubmit={(values, actions) => this.salvar(values, actions)}
                render={ ({ values, touched, errors, isSubmitting, handleReset, setFieldTouched, setFieldValue }) => (
                    <Form>
                        <Grid container spacing={3}>
                            <Grid item xs={11}>
                                <Field
                                    component={TextField}
                                    fullWidth
                                    size="small"
                                    name="nome"
                                    label="Nome do Aluno"
                                    value={values.nome}
                                    variant="outlined"
                                    onFocus={ () => setFieldTouched('nome') }
                                    onChange={ e => this.handleChange('nome', e.target.value, setFieldValue)}
                                    error={touched.nome && errors.nome}
                                    helpertext={touched.nome && errors.nome}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Field 
                                    component={TextField}
                                    fullWidth
                                    size="small"
                                    name="responsavel"
                                    label="Responsável"
                                    value={values.responsavel}
                                    variant="outlined"
                                    onFocus={ () => setFieldTouched('responsavel') }
                                    onChange={ e => this.handleChange('responsavel', e.target.value, setFieldValue)}
                                    error={touched.responsavel && errors.responsavel}
                                    helpertext={touched.responsavel && errors.responsavel}
                                />
                            </Grid>
                            <Grid item container xs={11} justify="center" alignItems="center">
                                <Grid item xs={12} sm={6} md={3}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>                                
                                    <Field 
                                        component={KeyboardDatePicker}
                                        size="small"
                                        format="dd/MM/yyyy"
                                        name="dtNascimento"
                                        label="Data de Nascimento"
                                        value={values.dtNascimento}
                                        variant="outlined"
                                        onFocus={ () => setFieldTouched('dtNascimento') }
                                        onChange={ e => this.handleChange('dtNascimento', e, setFieldValue)}
                                        error={touched.dtNascimento && errors.dtNascimento}
                                        helpertext={touched.dtNascimento && errors.dtNascimento}
                                    />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Field 
                                        component={TextField}
                                        size="small"
                                        name="telResponsavel"
                                        label="Telefone do Responsável"
                                        value={values.telResponsavel}
                                        variant="outlined"
                                        onFocus={ () => setFieldTouched('telResponsavel') }
                                        onChange={ e => this.handleChange('telResponsavel', e.target.value, setFieldValue)}
                                        error={touched.telResponsavel && errors.telResponsavel}
                                        helpertext={touched.telResponsavel && errors.telResponsavel}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Field 
                                        component={TextField}
                                        size="small"
                                        name="telEmergencia"
                                        label="Telefone Emergência"
                                        value={values.telEmergencia}
                                        variant="outlined"
                                        onFocus={ () => setFieldTouched('telEmergencia') }
                                        onChange={ e => this.handleChange('telEmergencia', e.target.value, setFieldValue)}
                                        error={touched.telEmergencia && errors.telEmergencia}
                                        helpertext={touched.telEmergencia && errors.telEmergencia}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Field 
                                        component={TextField}
                                        size="small"
                                        name="turma"
                                        label="Turma"
                                        value={values.turma}
                                        variant="outlined"
                                        onFocus={ () => setFieldTouched('turma') }
                                        onChange={ e => this.handleChange('turma', e.target.value, setFieldValue)}
                                        error={touched.turma && errors.turma}
                                        helpertext={touched.turma && errors.turma}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xs={11}>
                                <Field 
                                    component={TextField}
                                    fullWidth
                                    size="small"
                                    name="emergenciaAvisar"
                                    label="Em caso de Emergência Avisar"
                                    value={values.emergenciaAvisar}
                                    variant="outlined"
                                    onFocus={ () => setFieldTouched('emergenciaAvisar') }
                                    onChange={ e => this.handleChange('emergenciaAvisar', e.target.value, setFieldValue)}
                                    error={touched.emergenciaAvisar && errors.emergenciaAvisar}
                                    helpertext={touched.emergenciaAvisar && errors.emergenciaAvisar}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <FormControlLabel
                                    control={
                                        <Field
                                            component={Checkbox}
                                            name="autorizaFotoVideoUsoEscolar"
                                            value={!values.autorizaFotoVideoUsoEscolar}
                                            checked={values.autorizaFotoVideoUsoEscolar}
                                            color="primary"
                                            onFocus={ () => setFieldTouched('autorizaFotoVideoUsoEscolar') }
                                            onChange={ e => this.handleChange('autorizaFotoVideoUsoEscolar', e.target.checked, setFieldValue)}
                                            error={touched.autorizaFotoVideoUsoEscolar && errors.autorizaFotoVideoUsoEscolar}
                                            helpertext={touched.autorizaFotoVideoUsoEscolar && errors.autorizaFotoVideoUsoEscolar}
                                            />
                                    }
                                    label="Autoriza uso de fotos e videos para uso escolar"
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <CheckBoxSwitch 
                                    label="Possui Restrição Alimentar - Meu Componente"
                                    name="possuiRestricaoAlimentar"
                                    checked={values.possuiRestricaoAlimentar}
                                    value={values.possuiRestricaoAlimentar}
                                    color="primary"
                                    onFocus={ () => setFieldTouched('possuiRestricaoAlimentar') }
                                    onChange={ e => this.handleChange('possuiRestricaoAlimentar', e.target.checked, setFieldValue)}
                                    error={touched.possuiRestricaoAlimentar && errors.possuiRestricaoAlimentar}
                                    helpertext={touched.possuiRestricaoAlimentar && errors.possuiRestricaoAlimentar}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Field 
                                    component={TextField}
                                    fullWidth
                                    multiline
                                    size="small"
                                    name="descRestricaoAlimentar"
                                    label="Descrição das Restrições Alimentares"
                                    value={values.descRestricaoAlimentar}
                                    variant="outlined"
                                    onFocus={ () => setFieldTouched('descRestricaoAlimentar') }
                                    onChange={ e => this.handleChange('descRestricaoAlimentar', e.target.value, setFieldValue)}
                                    error={touched.descRestricaoAlimentar && errors.descRestricaoAlimentar}
                                    helpertext={touched.descRestricaoAlimentar && errors.descRestricaoAlimentar}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Field 
                                    component={TextField}
                                    fullWidth
                                    multiline
                                    size="small"
                                    name="autorizadosBuscarCrianca"
                                    label="Pessoas autorizadas a buscar a criança"
                                    value={values.autorizadosBuscarCrianca}
                                    variant="outlined"
                                    onFocus={ () => setFieldTouched('autorizadosBuscarCrianca') }
                                    onChange={ e => this.handleChange('autorizadosBuscarCrianca', e.target.value, setFieldValue)}
                                    error={touched.autorizadosBuscarCrianca && errors.autorizadosBuscarCrianca}
                                    helpertext={touched.autorizadosBuscarCrianca && errors.autorizadosBuscarCrianca}
                                />
                            </Grid>
                            <Grid item xs={11}>
                                <Field 
                                    component={TextField}
                                    fullWidth
                                    multiline
                                    size="small"
                                    name="observacoesAdicionais"
                                    label="Observações Adicionais"
                                    value={values.observacoesAdicionais}
                                    variant="outlined"
                                    onFocus={ () => setFieldTouched('observacoesAdicionais') }
                                    onChange={ e => this.handleChange('observacoesAdicionais', e.target.value, setFieldValue)}
                                    error={touched.observacoesAdicionais && errors.observacoesAdicionais}
                                    helpertext={touched.observacoesAdicionais && errors.observacoesAdicionais}
                                />
                            </Grid>
                            <Grid item xs={11} >
                                <Grid container spacing={2} justify="flex-end">
                                    <Grid item >
                                        <Button variant="contained" onClick={() => {handleReset(ALUNO_INICIAL)}}>Novo</Button>
                                    </Grid>
                                    <Grid item >
                                        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting || !this.state.teveAlteracao}>Salvar</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            />
        )
    }
}

export default CadastroAlunos;