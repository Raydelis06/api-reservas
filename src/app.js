import "dotenv/config"
import express from "express"
import { loggerMiddleware } from "./middlewares/logger.middleware.js"
import authRoutes from "./routes/auth.routes.js"
import serviciosRoutes from "./routes/servicios.routes.js"
import prestamosRoutes from "./routes/prestamos.routes.js"
import {verificarToken} from "./middlewares/auth.middleware.js"

const app = express()

app.use(express.json())
app.use(loggerMiddleware)

//Rutas publicas para autenticacion (login y registro)
app.use("/auth", authRoutes)

//Rutas privadas para servicios
app.use("/servicios", serviciosRoutes)

app.use((err, req, res, next) => {
  console.error(err.message)
  res.status(500).json({ error: "Error interno del servidor" })
})

export default app