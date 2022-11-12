
const express = require("express"); 
const cors = require("cors"); // poder hacer q lo q tengamos en el puerto 8000 lo podamos hacer en el 3000
const app = express(); 

//Para usar Json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL de front end
        origin: "http://localhost:3000"
    }),
);

//Inicializa BD
require("./server/config/mongoose.config");

//Importamos rutas
const misRutas = require("./server/routes/autor.routes");
misRutas(app);

//Ejecutamos server
app.listen(8000, ()=>console.log("Servidor listo !"));  