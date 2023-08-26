const dotenv = require("dotenv");

dotenv.config();
const app = require("./app.js");

const port = parseInt(process.env.PORT);
app.listen(port, () => {
  console.log("listenting to port");
});
