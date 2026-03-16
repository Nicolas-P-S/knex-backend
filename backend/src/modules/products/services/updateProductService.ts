import { prisma } from "../../../database/prisma"

interface UpdateRequest {
  productId: string
  userId: string
  name?: string
  description?: string
  price?: number
}

export class UpdateProductService {

  async execute({ productId, userId, name, description, price }: UpdateRequest) {

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

    const data: any = {}

    if (name !== undefined) data.name = name
    if (description !== undefined) data.description = description
    if (price !== undefined) data.price = price

    const updated = await prisma.product.update({
      where: { id: productId },
      data
    })

    return updated
  }
}