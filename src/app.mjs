import { connectDB } from "./config/dbConfig.mjs";
import express from 'express';
import superHeroRouter from './routes/SuperheroRoutes.mjs'

//agrego 
import ejs from 'ejs';

const app = express();
const PORT = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './view')

//Conexión a la Base de Datos
connectDB();

//Para archivos estáticos
app.use(express.static('public'));

//Configuración de Rutas
app.use('/api',superHeroRouter);


app.use((req, res) =>{
    res.status(404).send({mensaje: "Ruta no encontrada"});
});

/*
app.get('/',(req, res)=>{
    res.render('index',{title: 'SuperHero'})
})*/

//Iniciar el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor se está ejecutando http://localhost:${PORT}`);
});
