import { PrismaClient } from "../../generated/prisma/index.js";
const prisma = new PrismaClient();

export const listarPessoas = async (req, res) => {
  try {
    const pessoas = await prisma.pessoa.findMany();

    res.status(200).json(pessoas);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar pessoas.", error: error.message });
  }
};

export const criarPessoa = async (req, res) => {
  try {
    const novaPessoa = await prisma.pessoa.create({
      data: {
        email: req.body.email,
        name: req.body.name,
      },
    });

    res.status(201).json(novaPessoa);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao criar pessoa.", error: error.message });
  }
};

export const deletarPessoa = async (req, res) => {
  try {
    await prisma.pessoa.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ message: "Pessoa deletada com sucesso!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao deletar pessoa.", error: error.message });
  }
};
