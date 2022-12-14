import express from 'express';
import "dotenv/config";
import "./src/database/connect.js";
import cors from 'cors';
import provaiderRoutes from "./src/routes/products/provaiderRoutes.js";




const app = express()

app.use(cors());

app.use(express.json());





app.get('/',(req,res)=>{
    res.send('welcome to App Siipi BackEnd v02')
})

app.use("/api/v2/provaider", provaiderRoutes);


//* Iniciamos el servidor y le decimos que escuche en el puerto 3000

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT} 🔥🔥🔥🔥 `);
    }
);
