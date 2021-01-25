import * as types from './types';

const INITIAL_STATE = {}

const ProcessoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        /*Redux - Sozinho*/
        case types.ARMAZENAR_PROCESSOS:
            return { ...state, processos: action.payload };
        /* */
        /* Redux-Thunk */
        case types.SETAR_PROCESSO_ATUAL:
            return { ...state, processoAtual: action.payload }
        /* */
        default:
            return state;
    }
}

export default ProcessoReducer;