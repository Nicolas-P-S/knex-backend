import { Request, Response } from "express"
import { CriarProductService } from "../services/criarProductService"

export class CriarProductController {
  async handle(req: Request, res: Response) {

    const { name, description, price } = req.body
    const userId = (req as any).userId
    const service = new CriarProductService()

    const product = await service.execute({
      name,
      description,
      price,
      userId
    })

    return res.json(product)
  }
}