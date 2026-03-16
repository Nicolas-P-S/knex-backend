import { Request, Response } from "express"
import { ListarProductsService } from "../services/listarProductsService"

export class ListProductsController {
  async handle(req: Request, res: Response) {
    const service = new ListarProductsService()

    const products = await service.execute()

    return res.json(products)
  }
}