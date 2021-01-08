import React, { Component } from 'react';

class Listagem extends Component {
    render() {
        return (
            <>
                {this.props.alunos && this.props.alunos.lenght > 0 &&
                    <div className="listagem">
                        <table className="tabela-alunos">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                }
            </>
        );
    }
}