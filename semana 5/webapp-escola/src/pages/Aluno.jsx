import React, { Component } from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';


class Aluno extends Component {

    render () {
        return (
            <React.Fragment>
                <EstruturaDaPagina title="Escola Amorinha" 
                    children={[
                        <Section titulo="Cadastro de Alunos"/>,
                        <Section titulo="Listagem de Alunos"/>
                    ]}
                />
            </React.Fragment>
        )
    }

}

export default Aluno;