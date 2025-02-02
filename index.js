import express, { json } from "express";
import data from "./data/data.json" assert { type: "json" };
import fs from "fs";
import path from "path";


const app = express();
const PORT = 3000;
app.use(express.json());
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
app.post("/fruits", (req, res) => {
  console.log(req.body);
  const body = req.body;
  data.push(body);
  console.log(data);
  res.send("saved successfully");

});
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
    res.status(200).send(fruit);
  } else if (!fruitName) {
    res.status(200).send(data);
  } else if (!data) {
    res.status(500).send("server error");
  }
});

//adding to the data.json

 let newData = {
    "id": 9,
    "name": "cherry",
    "color": "brown",
    "taste": "Sweet",
    "price_per_kg": 2.5,
    "origin": "nigeria",
    "description":
      "A juicy tropical fruit with a sweet and fragrant sour flesh. cherry are loved for their rich flavor.",
    "image": "https://example.com/images/mango.jpg",
  };




  


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
