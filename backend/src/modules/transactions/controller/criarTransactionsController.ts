import { Request, Response } from "express"
import { CreateTransactionService } from "../services/criarTransactionsService"

export class CriarTransactionController {
  async handle(req: Request, res: Response) {

    const { productId } = req.body
    const userId = (req as any).userId

    const service = new CreateTransactionService()

    const transaction = await service.execute({
      userId,
      productId
    })

    return res.json(transaction)
  }
}