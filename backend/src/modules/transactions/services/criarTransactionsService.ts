import { prisma } from "../../../database/prisma"

interface CreateTransactionRequest {
  userId: string
  productId: string
}

export class CreateTransactionService {
  async execute({ userId, productId }: CreateTransactionRequest) {

    const product = await prisma.product.findUnique({
      where: { id: productId }
    })

    if (!product) {
      throw new Error("Product not found")
    }

    const transaction = await prisma.transaction.create({
      data: {
        userId,
        productId,
        priceAtPurchase: product.price
      }
    })

    return transaction
  }
}