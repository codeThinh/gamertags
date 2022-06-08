const express = require("express");
const app = express();
const PORT = 8000;

const gamertags = {
  ninja: {
    age: 31,
    birthName: "Richard Tyler Blevins",
    birthPlace: "Detroit, NA",
  },
  n0tail: {
    age: 28,
    birthName: "Johan Sundstein",
    birthPlace: "Denmark, EU",
  },
  dylan: {
    age: 69,
    birthName: "Dylan",
    birthPlace: "Dylan, Dylan",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:gamertag", (req, res) => {
  const gamertag = req.params.gamertag.toLowerCase();
  if (gamertags[gamertag]) {
    res.json(gamertags[gammertag]);
  } else {
    res.json(gamertags["dylan"]);
  }
  //   res.json(gamertags);
});

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}!`);
});
