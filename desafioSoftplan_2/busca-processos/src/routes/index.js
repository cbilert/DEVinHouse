import PageFiltro from '../pages/processo/PageFiltro';
import PageCadastro from '../pages/processo/PageCadastro';
import PageLista from '../pages/processo/PageLista';

const routes = [
    {
        path: '/',
        component: PageFiltro,
        exact: true
    },
    {
        path: "/listagem",
        component: PageLista,
        exact: true
    },
    {
        path: "/cadastro/:id?",
        component: PageCadastro
    }
]

export default routes;