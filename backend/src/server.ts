import express from "express"
import "dotenv/config"
import { usuariosRoutes } from "./routes/usuarios.routes"
import {authRoutes} from "./routes/auth.routes"
import {productRoutes} from "./routes/products.routes"
import { transactionsRoutes } from "./routes/transaction.routes"

const app = express()

app.use(express.json())
app.use(usuariosRoutes)
app.use(authRoutes)
app.use(productRoutes)
app.use(transactionsRoutes)

app.listen(3000, () => {
    console.log("Server running in port 3000")
})
