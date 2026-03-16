import { prisma } from "../../../database/prisma"

export class DeleteProductService {
  async execute(productId: string, userId: string) {

    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    const product = await prisma.product.findUnique({
      where: { id: productId }
    })

    if (!product) {
      throw new Error("Product not found")
    }

    if (user?.companyId !== product.companyId) {
      throw new Error("Permission denied")
    }

    await prisma.product.delete({
      where: { id: productId }
    })
  }
}