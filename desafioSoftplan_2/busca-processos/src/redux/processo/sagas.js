import { call, put, takeEvery, all } from 'redux-saga/effects';

import * as types from './types';
import ProcessoAPI from '../../services/processo';

function* buscarProcessos(action) {
    const processos = yield call(ProcessoAPI.buscarProcessos, action.payload);
    yield put({type: types.ARMAZENAR_PROCESSOS, payload: processos});
}

function* buscarProcesso(action) {
    const processo = yield call(ProcessoAPI.buscarProcesso, action.payload);
    yield put ({type: types.SETAR_PROCESSO_ATUAL, payload: processo});
}

function* excluirProcesso(action) {
    yield call(ProcessoAPI.excluirProcesso, action.payload.id);
    yield put ({type: types.BUSCAR_PROCESSOS});
}

function* inserirProcesso(action) {;
    yield call(ProcessoAPI.inserirProcesso, action.payload);
}

function* atualizarProcesso(action) {
    yield call(ProcessoAPI.atualizarProcesso, action.payload);
}

function* watchBuscarProcessos() {
    yield takeEvery(types.BUSCAR_PROCESSOS, buscarProcessos);
}

function* watchBuscarProcesso() {
    yield takeEvery(types.BUSCAR_PROCESSO, buscarProcesso);
}

function* watchExcluirProcesso() {
    yield takeEvery(types.EXCLUIR_PROCESSO, excluirProcesso);
}

function* watchInserirProcesso() {
    yield takeEvery(types.INSERIR_PROCESSO, inserirProcesso);
}

function* watchAtualizarProcesso() {
    yield takeEvery(types.ATUALIZAR_PROCESSO, atualizarProcesso);
}

/* function* watchLimparProcessoAtual() {
    yield takeEvery(types.LIMPAR_PROCESSO_ATUAL, limparProcessoAtual);
} */

export default function* rootSaga() {
    yield all([
        watchBuscarProcessos(),
        watchBuscarProcesso(),
        watchExcluirProcesso(),
        watchInserirProcesso(),
        watchAtualizarProcesso(),
        //watchLimparProcessoAtual()
    ])
}