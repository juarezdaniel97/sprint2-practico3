import { connectDB } from "./config/dbConfig.mjs";
import express from 'express';
import superHeroRouter from './routes/SuperheroRoutes.mjs'
import expressEjsLayouts from "express-ejs-layouts";


const app = express();
const PORT = 3000;

//MIDDLEWARE
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './view')

//Configuración Express-ejs-layout
app.use(expressEjsLayouts);

//Conexión a la Base de Datos
connectDB();

//Para archivos estáticos
app.use(express.static('public'));

//Configuración de Rutas
app.use('/api',superHeroRouter);


app.use((req, res) =>{
    res.status(404).render('404',{ title: '404 - Página no encontradaperHero' });
});


//Iniciar el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor se está ejecutando http://localhost:${PORT}`);
});
