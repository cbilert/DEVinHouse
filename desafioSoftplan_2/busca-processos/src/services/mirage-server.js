import { createServer, Model } from "miragejs";
import * as constants from './constants';
import processos from './dadosProcesso.json';

export function criarServidor({ environment = "development" } = {}) {
  const server = createServer({
    environment,

    models: {
      processo: Model,
    },

    seeds(server) {
        processos.forEach(processo => server.create("processo", processo));
    },

    routes() {
      this.namespace = constants.PROCESSO_API;

      this.get("/processos", (schema, request) => {
        const filtro = request.queryParams.filtro;
        if (filtro) { 
          return schema.processos.where(processo => processo.numero.includes(filtro) || processo.assunto.includes(filtro) || processo.interessados.includes(filtro) || processo.descricao.includes(filtro)).models
        }

        return schema.processos.all().models;
      });

      this.get("/processos/:id", (schema, request) => {
        const id = request.params.id;

        return schema.processos.find(id).attrs;
      });

      //let newId = 3
      this.post("/processos", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        //attrs.id = newId++
        
        return schema.processos.create(attrs);
      });

      this.put("/processos", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        
        return schema.processos.create(attrs);
      });

      this.delete("/processos/:id", (schema, request) => {
        const id = request.params.id;

        return schema.processos.find(id).destroy();
      });
    },
  });

  return server;
}