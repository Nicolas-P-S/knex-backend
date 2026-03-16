import { Request, Response } from "express"
import { AuthService } from "../services/authService"

export class AuthController {
  async handle(req: Request, res: Response) {

    const {email, senha} = req.body

    const authService = new AuthService()

    const result = await authService.execute({ email, senha })

    return res.json(result)
  }
}