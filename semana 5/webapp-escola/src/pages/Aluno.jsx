import React, { Component } from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import Listagem from '../aluno/Listagem';
import { alunos } from '../util/constantes';

class Aluno extends Component {
    constructor(props) {
        super(props);

        this.state = {alunos:[]}
    }

    componentDidMount() {
        this.setState({alunos: alunos});
    }

    render () {
        return (
            <React.Fragment>
                <EstruturaDaPagina title="Escola Amorinha" 
                    children={[
                        <Section titulo="Cadastro de Alunos"/>,
                        <Section titulo="Listagem de Alunos">
                            <Listagem alunos={this.state.alunos} />
                        </Section>
                    ]}
                />
            </React.Fragment>
        )
    }

}

export default Aluno;