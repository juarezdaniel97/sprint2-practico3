import { connectDB } from "./config/dbConfig.mjs";
import express from 'express';
import superHeroRouter from './routes/SuperheroRoutes.mjs'

const app = express();
const PORT = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.json());


//Conexión a la Base de Datos
connectDB();


//Configuración de Rutas
app.use('/api',superHeroRouter);

app.use((req, res) =>{
    res.status(404).send({mensaje: "Ruta no encontrada"});
});


//Iniciar el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor se está ejecutando http://localhost:${PORT}`);
});
