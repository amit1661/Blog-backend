// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("App is running successfully.");
// });

// app.get("/", (req, res) => {
//   res.send(`<h1>This is My Homepage.</h1>`);
// });

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());

const blog = require("./routes/blog");
//mount
app.use("/api/v1", blog);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
  console.log(`App is started at port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is Homepage again.</h1>`);
});
