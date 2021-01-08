import React, { Component } from 'react';
import './Listagem.css';
class Listagem extends Component {
    render() {
        if(!this.props.alunos || this.props.alunos.length === 0) {
            return (<span>Não existem alunos a serem listados</span>)
        }

        return (
            <>
                {this.props.alunos && this.props.alunos.length > 0 &&
                    <div className="listagem">
                        <table className="tabela-alunos">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Data Nasc.</th>
                                    <th>Turma</th>
                                    <th>Tel. Emergência</th>
                                    <th>Avisar</th>
                                    <th className="acoes" colSpan="2">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.alunos.map(aluno => (
                                    <tr key={aluno.nome}>
                                        <td>{aluno.nome}</td>
                                        <td>{aluno.dtNasc}</td>
                                        <td>{aluno.turma}</td>
                                        <td>{aluno.telEmergencia}</td>
                                        <td>{aluno.emergenciaAvisar}</td>
                                        <td className="acoes"><button onClick={e => this.handleEditar(aluno)}>Editar</button></td>
                                        <td className="acoes"><button onClick={e => this.handleExcluir(aluno)}>Excluir</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </>
        )
    }
}

export default Listagem;