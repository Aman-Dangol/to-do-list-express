const express = require("express");
const { conn } = require("./dbConnect");

const app = express();

app.use(express.json());
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
  conn.query(`insert into lists(task) values('${task}')`);
  res.redirect("/");
});

app.delete("/delete", (req, res) => {
  let { id } = req.body;
  conn.query(`delete  from lists where id = ${id}`);
  res.send();
});

app.get("/edit/:id", (req, res) => {
  res.sendFile(`${__dirname}/editpage.html`);
});

app.get("/getdata", (req, res) => {
  const { id } = req.query;
  conn.query(
    `select * from lists where lists.id = ${id}`,
    (err, data, field) => {
      if (err) {
        res.send("err");
        return;
      }
      console.log(data);
      res.json(data);
    }
  );
});

app.post("/update", (req, res) => {
  const { id, name } = req.body;
  conn.query(`update lists set lists.task='${name}' where lists.id = ${id}`);
  res.redirect("/");
});
app.listen(8000);
