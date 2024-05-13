const express = require("express");
const { conn } = require("./dbConnect");

const app = express();

app.use("/public", express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/getTasks", (req, res) => {
  let data = conn.query("select * from lists", (err, data) => {
    if (err) {
      res.send("error");
      return;
    }
    res.json(data);
  });
});

app.post("/add", (req, res) => {
  let { task } = req.body;
  console.log(task);
  conn.query(`insert into lists(task) values('${task}')`);
  res.redirect("/");
});
app.listen(8000);
