import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://Grupo-13:grupo13@cursadanodejs.ls9ii.mongodb.net/Node-js',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión exitosa a MongoBD');
        
    } catch (error) {
        console.log('Error al conectar a MongoBD:', error);
        process.exit(1)
    }
}