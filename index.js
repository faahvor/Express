import express, { json } from "express";
import data from "./data/data.json" assert { type: "json" };

const app = express();

const PORT = 3000;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/", (req, res) => {
  res.send("hello Favour");
});
app.get("/ab?cd", (req, res) => {
  res.send("path for ab?cd");
});
app.get("/ab+c+d", (req, res) => {
  res.send("path for double b and c");
});
app.get("/ab*cd", (req, res) => {
  res.send("tell me my name ");
});
// app.get(/a/, (req, res) => {
//   res.send("path for /a/ ");
// });
app.get(/.*able$/, (req, res) => {
  res.send("any path that has able in it");
});
app.get("/fruits/:fruitName?", (req, res) => {
  const { fruitName } = req.params;
  if (fruitName) {
    const fruit = data.find((f) => f.name === fruitName);
    if (!fruit) {
      res.status(404).send("fruit not found");
    }
    res.send(fruit);
  }
});

app.get("/users/:id?", (req, res) => {
  if (req.params.id) {
    res.status(200);
    res.status(200);
    res.set("Content-Type", "text/html");
    res.send(`
      <html>
    <body>
    <h1 style="color:red">hello ${req.params.id}</h1>
     </body>
     </html>

    `);
  } else {
    res.send("all users");
  }
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
