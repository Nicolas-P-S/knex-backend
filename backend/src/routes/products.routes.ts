import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware"
import { CriarProductController } from "../modules/products/controllers/criarProductController"
import { ListProductsController } from "../modules/products/controllers/listarProductController"
import {UpdateProductController } from "../modules/products/controllers/updateProductController"

const listProductsController = new ListProductsController()
const updateProductController = new UpdateProductController()
const createProductController = new CriarProductController()

const productRoutes = Router()

productRoutes.put("/products/:id", authMiddleware, updateProductController.handle)
productRoutes.get("/products", authMiddleware, listProductsController.handle)
productRoutes.post(
  "/products",
  authMiddleware,
  createProductController.handle
)

export {productRoutes}