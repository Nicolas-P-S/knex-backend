import { prisma } from "../../../database/prisma"

export class ListarProductsService {
  async execute() {
    const products = await prisma.product.findMany({
      include: {
        company: true
      }
    })

    return products
  }
}