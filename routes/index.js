import usuarioRuta from './UsuarioRouter.js';
import wallsRuta from './WallsRouter.js';
import paintersRuta from './PaintersRouter.js';

const routerAPI = (app) => {
    app.use('/api/usuarios', usuarioRuta);
    app.use('/api/walls', wallsRuta);
    app.use('/api/painters', paintersRuta);
}

export default routerAPI;
