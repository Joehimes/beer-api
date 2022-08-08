const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

let beerList = {
  "coors light": {
    name: "Coors Light",
    company: "Coors Brewing Company",
    style: "Light Lager",
    introduced: "1978",
    ABV: "4.2%",
  },
  "mallow laser quest": {
    name: "Mallow Laser Quest",
    company: "Brewdog",
    style: "IPA",
    introduced: "2022",
    ABV: "6%",
  },
  unknown: {
    name: "unknown",
    company: "unknown",
    style: "unknown",
    introduced: "unknown",
    ABV: "unknown",
  },
};

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:beerName", (req, res) => {
  const beer = req.params.beerName.toLowerCase();
  if (beerList[beer]) {
    res.json(beerList[beer]);
  } else {
    res.json(beerList["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
