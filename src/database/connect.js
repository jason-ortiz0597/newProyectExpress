import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conectado a la base de datos 👍👍👍");
} catch (error) {
    console.log("Error al conectar a la base de datos 👎👎👎" + error);
}
