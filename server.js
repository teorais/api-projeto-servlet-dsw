import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

const usuarios = [];

app.post("/pessoas", async (req, res) => {
  await prisma.usuario.create({
    data: {
      email: req.body.email,
      name: req.body.name,
    },
  });

  res.status(201).json(req.body);
});

app.get("/pessoas", async (req, res) => {
  let users = [];

  if (req.query) {
    users = await prisma.usuario.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
      },
    });
  } else {
    users = await prisma.usuario.findMany();
  }

  res.status(200).json(users);
});

app.put("/pessoas/:id", async (req, res) => {
  await prisma.usuario.update({
    where: {
      id: req.params.id,
    },
    data: {
      email: req.body.email,
      name: req.body.name,
    },
  });

  res.status(201).json(req.body);
});

app.delete("/pessoas/:id", async (req, res) => {
  await prisma.usuario.delete({
    where: {
      id: req.params.id,
    },
  });

  res.status(200).json({ message: "Usuário deletado!" });
});

app.listen(3000);

//admin
//v9ibzSZXwGwJMa8o
