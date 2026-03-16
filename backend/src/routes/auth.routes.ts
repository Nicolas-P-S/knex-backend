import { Router } from "express"
import { AuthController } from "../modules/auth/controllers/authController"

const authRoutes = Router()

const authController = new AuthController()

authRoutes.post("/sessions", authController.handle)

export { authRoutes }