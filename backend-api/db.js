const dotenv = require("dotenv");
dotenv.config();
const mongodb = require("mongodb");

// const client = new MongoClient(process.env.CONNECTIONSTRING, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });
// client.connect().then(() => {
//   module.exports = client;
//   const app = require("./app");
//   app.listen(process.env.PORT);
// });

mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    if (err) {
      console.log("Error", err, "Conn", process.env.CONNECTIONSTRING);
    }
    module.exports = client;
    const app = require("./app");
    app.listen(process.env.PORT);
    console.log(`Listen on port ${process.env.PORT}`);
  }
);
