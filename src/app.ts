import "dotenv/config"
import express from "express"
import swaggerUi from "swagger-ui-express";
import cors from "cors"
import { router } from "./routes";
import db from "./config/mongo";

const swaggerDoc = require("./swagger.json")
const PORT = process.env.PORT;
const app = express();

db().then(()=> console.log("Conexion Establecida"))
app.use(cors())
.use(express.json())
.use(router)
.use("/documentation",swaggerUi.serve, swaggerUi.setup(swaggerDoc))
.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`))