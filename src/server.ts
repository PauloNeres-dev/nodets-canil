import express from 'express';
import * as dotenv from 'dotenv';
import mustacheExpress from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index'

dotenv.config();

const server = express();
const port = process.env.PORT;


server.engine('mustache', mustacheExpress());
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));


server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req, res) =>{
    res.send('Pagina não encontrada!')
})


server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});