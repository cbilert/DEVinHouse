import { Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit' ;
import Filtro from '../components/Filtro';

class Listagem extends Component {

    state = {filtroAluno:''};
    
    handleEditar(aluno) {
        this.props.editar(aluno);
    }

    handleExcluir(aluno){
        this.props.excluir(aluno);
    }
    
    handleFilter = (filtroAluno) => {
        this.setState({filtroAluno:filtroAluno});
    }
    
    callbackFilter = (listaRetorno) => {
        console.log("callBackReturn: ",listaRetorno);
        this.setState({alunos : listaRetorno});
        console.log(this.props.alunos);
    }

    render() {
        if(!this.props.alunos || this.props.alunos.length === 0) {
            return (<span>Não existem alunos a serem listados</span>)
        }

        return (
            <>
                {this.props.alunos && this.props.alunos.length > 0 &&
                    <Grid container spacing={3}>
                        <Grid item container xs={11} >
                            <Filtro 
                                value={this.state.filtroAluno}
                                name="filtroAluno"
                                label="Pesquisar"
                                lista={this.props.alunos}
                                onChange={ e => {this.handleFilter(e.target.value)}}
                                callbackFilter={this.callbackFilter}
                            />
                        </Grid>
                        <Grid item container xs={11} >
                            <TableContainer component={Paper}>
                                <Table 
                                    size="small" 
                                    stickyHeader>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Nome</TableCell>
                                            <TableCell>Data Nasc.</TableCell>
                                            <TableCell>Turma</TableCell>
                                            <TableCell>Tel. Emergência</TableCell>
                                            <TableCell>Avisar</TableCell>
                                            <TableCell className="acoes" colSpan="2">Ações</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {this.props.alunos.map(aluno => (
                                            <TableRow 
                                                key={aluno.id}
                                                hover
                                            >
                                                <TableCell width="25%">{aluno.nome}</TableCell>
                                                <TableCell>{aluno.dtNascimento}</TableCell>
                                                <TableCell>{aluno.turma}</TableCell>
                                                <TableCell>{aluno.telEmergencia}</TableCell>
                                                <TableCell width="20%">{aluno.emergenciaAvisar}</TableCell>
                                                <TableCell>
                                                    <IconButton color="primary" onClick={() => this.handleEditar(aluno)}>
                                                        <EditIcon/>
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell>
                                                    <IconButton onClick={() => this.handleExcluir(aluno)}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                }
            </>
        )
    }
}

export default Listagem;