import { sequelize } from "./Database/database";
import app from "./app";

let main = async () => {
  try {
    await sequelize.sync();
    console.log("La conexión se establecio correctamente");
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
  } catch (error) {
    console.log(error);
  }
};

main();
