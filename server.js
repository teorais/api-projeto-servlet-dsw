import express from "express";
import pessoaRoutes from "./src/routes/pessoaRoutes.js";

const app = express();

app.use(express.json());

app.use("/", pessoaRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor da API rodando na porta ${PORT}`);
});

//admin
//v9ibzSZXwGwJMa8o
