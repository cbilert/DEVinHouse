import React, { Component } from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Listagem from '../aluno/Listagem';
import AlunosService from '../services/alunosService';
import CadastroAlunos from '../aluno/Cadastro';

class Aluno extends Component {
    constructor(props) {
        super(props);

        this.state = { alunos: [] } 
    }

    componentDidMount() {
        this.carregarAlunos();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.alunoEmEdicao === prevState.alunoEmEdicao) {
            return;
        }
    }
    
    async carregarAlunos() {
        const alunos = await AlunosService.buscar();
        this.setState({ alunos: alunos });
    }


    editarAluno = (aluno) => {
        this.setState({alunoEmEdicao: aluno});
    }

    excluirAluno = (aluno) => {
        AlunosService.excluir(aluno.id).then( () => this.carregarAlunos() );
    }

    salvar = aluno => {
        if (aluno.id) {
            AlunosService.atualizar(aluno).then(() => {
                this.carregarAlunos();
                this.setState({alunoEmEdicao: null});
            });
            return;
        }

        AlunosService.inserir(aluno).then(() => {
            this.carregarAlunos();
            this.setState({alunoEmEdicao: null})
        });
    }
    
    render () {
        return (
            <React.Fragment>
                <EstruturaDaPagina title="Escola Amorinha">
                    <Section titulo="Cadastro de Alunos">
                        <CadastroAlunos aluno={this.state.alunoEmEdicao} salvar={this.salvar}/>
                    </Section>
                    <Section titulo="Listagem de Alunos">
                        <Listagem 
                            alunos={ this.state.alunos } 
                            editar={ this.editarAluno } 
                            excluir={ this.excluirAluno } 
                        />
                    </Section>
                </EstruturaDaPagina>
            </React.Fragment>
        )
    }

}

export default Aluno;