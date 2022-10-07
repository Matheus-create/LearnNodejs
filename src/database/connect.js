const mongoose = require("mongoose");

const connectToDatabase = async () => {
  // console.log(process.env.MONGODB_URL);
  await mongoose.connect(
    `mongodb+srv://testUser:H9G7viSrFg1BHZO1@learnnodejs.kvj0qmc.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar ao banco de dados: ",
          error
        );
      }

      return console.log("Conexão com o banco de dados realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
