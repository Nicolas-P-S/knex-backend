import { Router } from "express";
import { CriarUsuarioController } from "../modules/usuarios/controllers/criarUsuarioController";

const usuariosRoutes = Router();
const criarUsuarioController = new CriarUsuarioController();

usuariosRoutes.post("/users", criarUsuarioController.handle)

export{usuariosRoutes};