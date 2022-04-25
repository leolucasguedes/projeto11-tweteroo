import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const username = [];
let avatar;
app.post("/sign-up", (req, res) => {
  const data = req.body;
  username.push(data);
  avatar = data.avatar;
  //console.log(req.body);
  res.send("ok");
});

app.get("/sign-up", (req, res) => {
  res.send(username);
});

const tweet = [];
app.post("/tweets", (req, res) => {
  const data = req.body;
  tweet.push({ ...data, avatar: avatar });
  res.send(tweet);
  //console.log(req.body);
});

app.get("/tweets", (req, res) => {
  let lastTweets = tweet.slice(-10);
  res.send(lastTweets.reverse());
  //console.log(lastTweets);
});

app.listen(5000, () => {
  console.log("Server is running on: http://localhost:5000");
});