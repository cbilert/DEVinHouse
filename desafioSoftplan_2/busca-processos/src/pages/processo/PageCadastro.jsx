import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EstruturaDaPagina from "../../components/EstruturaDaPagina";
import Section from "../../components/Section";
import Cadastro from "../../components/Cadastro";
import { buscarProcesso, inserirProcesso, atualizarProcesso, limparProcessoAtual } from '../../redux/processo/actions';
import { getProcessoAtual } from '../../redux/processo/selectors';

const PageCadastro = props => {
    
    const processoEmEdicao = useSelector(getProcessoAtual);
    const dispatch = useDispatch()

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }

        dispatch(buscarProcesso(id));

        //return () => dispatch(limparProcessoAtual());
    }, [dispatch, id]);

    useEffect(() => {
        console.log("processoEmEdicao no Update", processoEmEdicao);
    }, [processoEmEdicao]);

    const salvarProcesso = processo => {
        if (processo.id) {
            dispatch(atualizarProcesso(processo));
            return;
        }

        dispatch(inserirProcesso(processo));
    }

    const limparProcessoEmEdicao = () => {
        dispatch(limparProcessoAtual())
    }

    return (
        <EstruturaDaPagina>
            <Section titulo="Cadastro de Processos">
                <Cadastro processo={processoEmEdicao} salvar={salvarProcesso} limpar={limparProcessoEmEdicao}/>
            </Section>
        </EstruturaDaPagina>
    )
}

export default PageCadastro;