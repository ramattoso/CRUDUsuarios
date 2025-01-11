import express from 'express';
import routes from './src/routes/UserRoutes.js';

const app = express();
routes(app);

//app.listen(porta, () => {})
app.listen(3000,() => {
    console.log('Servidor escutando...');
});
