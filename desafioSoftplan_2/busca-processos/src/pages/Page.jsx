import React, { Component } from 'react';
import EstruturaDaPagina from '../components/EstruturaDaPagina';
import Section from '../components/Section';
import './Page.css';

class Page extends Component {
    
    render() {
        return (
            <React.Fragment>
                    <EstruturaDaPagina title={this.props.titulo}>
                        <Section titulo={this.props.subtitulo} >
                            {this.props.children}
                        </Section>                    
                    </EstruturaDaPagina>
                </React.Fragment>
        )
    }
}

export default Page;