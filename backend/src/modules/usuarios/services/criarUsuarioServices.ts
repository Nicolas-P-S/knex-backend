import {prisma} from "../../../database/prisma";
import bcrypt from "bcrypt";

interface criarUsuario{
    nome: string;
    email: string;
    senha: string;
}

export class CriarUsuarioService {
    async execute({nome, email, senha}: criarUsuario){
        const usuarioExiste = await prisma.user.findUnique({
            where: {email}
        });

        if (usuarioExiste){
            throw new Error("Usuario já existe!")
        }

        const senhaHash = await bcrypt.hash(senha, 10);

        const usuario = await prisma.user.create({
            data: {
                name: nome,
                email,
                password: senhaHash
            }
        });
        return usuario;
    }
}