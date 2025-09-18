import express from "express";
import {
  listarPessoas,
  criarPessoa,
  deletarPessoa,
} from "../controllers/pessoaController.js";

const router = express.Router();

router.get("/pessoas", listarPessoas);
router.post("/pessoas", criarPessoa);
router.delete("/pessoas/:id", deletarPessoa);

export default router;
