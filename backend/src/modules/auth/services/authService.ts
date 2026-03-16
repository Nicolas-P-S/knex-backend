import { prisma } from "../../../database/prisma"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

interface AuthRequest {
  email: string
  senha: string
}

export class AuthService {
  async execute({email, senha}: AuthRequest) {

    const usuario = await prisma.user.findUnique({
      where: { email }
    })

    if (!usuario) {
      throw new Error("Email ou senha inválidos")
    }

    const senhaValida = await bcrypt.compare(senha, usuario.password)

    if (!senhaValida) {
      throw new Error("Email ou senha inválidos")
    }

    const token = jwt.sign(
      { userId: usuario.id },
      process.env.JWT_SEGREDO!,
      { expiresIn: "1d" }
    )

    return {
      usuario: {
        id: usuario.id,
        nome: usuario.name,
        email: usuario.email
      },
      token
    }
  }
}