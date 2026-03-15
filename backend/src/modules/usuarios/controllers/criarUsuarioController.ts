import {Request, Response} from "express";
import { CriarUsuarioService } from "../services/criarUsuarioServices";

export class CriarUsuarioController{
    async handle(req: Request, res: Response){
        const {nome, email, senha} = req.body;

        const services = new CriarUsuarioService();

        const usuario = await services.execute({
            nome, email, senha
        });
        return res.json(usuario);
    }
}