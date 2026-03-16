import { prisma } from "../../../database/prisma"

interface Request {
  name: string
  description: string
  price: number
  userId: string
}

export class CriarProductService {
  async execute({ name, description, price, userId }: Request) {

    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      throw new Error("User not found")
    }

    if (!user.companyId) {
      throw new Error("User is not linked to a company")
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        companyId: user.companyId
      }
    })

    return product
  }
}