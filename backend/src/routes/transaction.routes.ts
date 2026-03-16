import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware"
import { CriarTransactionController } from "../modules/transactions/controller/criarTransactionsController"

const transactionsRoutes = Router()

const createTransactionController = new CriarTransactionController()

transactionsRoutes.post(
  "/",
  authMiddleware,
  createTransactionController.handle
)

export { transactionsRoutes }