import express from "express";

const app = express();
const port = process.env.PORT || 3000;

let posts = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { postItems: posts });
});

app.post("/create", (req, res) => {
  if (posts.length < 64) {
    posts.push(req.body["newTodo"]);
  } else {
    console.log('Warning: (posts) Array Full! (Failed to add "' + req.body["newTodo"] + '")');
  }
  res.redirect("/");
});

app.post("/update", (req, res) => {
  posts[req.body["todoNumber"]] = req.body["todoUpdateText"];
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  posts.splice(req.body["todoNumber"], 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log("TODO List App: Server listening on: Port", port);
});
