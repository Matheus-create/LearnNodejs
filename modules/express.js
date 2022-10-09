const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();

//usar o ejs
app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.json());

//middleware
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);

  next();
});

//end point ejs
app.get("/views/users", async (req, res) => {
  const user = await UserModel.find({});
  res.render("index", { users: user });
});

//end point para pegar todos usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//end point para pegar um usario por id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// criar um usuario
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// atualizar um usuario

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//deletar um usuario
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

const port = 8080;

app.listen(port, () => console.log(`Run with Express in port ${port}!`));
