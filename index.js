import express from "express";

const app = express();

const PORT = 3000;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/users", (req, res) => {
  res.send("hello Favour");
});
// app.get("/users/deji", (req, res) => {
//   res.send("hello deji");
// });
app.get("/users/:name", (req, res) => {
    if(req.params.name.length < 5)res.status(200).send(`<h1>404 not Found</h1>`)
    
     
        res.status(200)
    
   
    res.set('Content-Type','text/html')
  res.send(`
      <html>
    <body>
   
    <h1 style="color:red">hello ${req.params.name}</h1>
     </body>
     </html>

    `);
 
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
