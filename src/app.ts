import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes";
import db from "./config/mongo";
const PORT = process.env.PORT;
const app = express();

db().then(()=> console.log("Conexion Establecida"))
app.use(cors())
.use(express.json())
.use(router)
.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`))