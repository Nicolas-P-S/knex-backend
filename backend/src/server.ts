import express from "express"
import "dotenv/config"
import { usuariosRoutes } from "./routes/usuarios.routes"

const app = express()

app.use(express.json())
app.use(usuariosRoutes)

app.listen(3000, () => {
    console.log("Server running in port 3000")
})
