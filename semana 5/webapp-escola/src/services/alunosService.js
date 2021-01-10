import axios from 'axios';
import * as constants from './constants';

const BASE_URL = `${constants.AMORINHA_API}/alunos`;

class AlunosService {

    buscar() {
        return axios.get(BASE_URL)
        .then(response => response.data)//response.json para API
        .catch(error =>{
            throw error;
        });
    }

	inserir(aluno) {
		return axios.post(BASE_URL, aluno)
			.catch(error => {
				throw error;
			})
	}

	atualizar(aluno) {
		return axios.put(BASE_URL, aluno)
			.catch(error => {
				throw error;
			})
	}
    
    excluir(id) {
		return axios.delete(`${BASE_URL}/${id}`)
            .catch(error => {
				throw error;
			});
	}
}

export default new AlunosService();