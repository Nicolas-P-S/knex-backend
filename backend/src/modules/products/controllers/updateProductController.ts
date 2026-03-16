import { Request, Response } from "express"
import { UpdateProductService } from "../services/updateProductService"

export class UpdateProductController {
  async handle(req: Request, res: Response) {

    const { id } = req.params
    const { name, description, price } = req.body
    const userId = (req as any).userId

    const service = new UpdateProductService()
    const productId = req.params.id as string

    const product = await service.execute({
      productId,
      userId,
      name,
      description,
      price
    })

    return res.json(product)
  }
}