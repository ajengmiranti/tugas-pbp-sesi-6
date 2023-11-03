const express = require("express");
const app = express();
const port = 5000;

const motoGP = [
  {
    circuit: "Losail",
    Location: "Qatar",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: {
      firstName: "Cal",
      lastName: "Crutchlow",
      country: "UK",
    },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: {
      firstName: "Valentino",
      lastName: "Rossi",
      country: "Italy",
    },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: {
      firstName: "Andrea",
      lastName: "Dovizioso",
      country: "Italy",
    },
  },
];

app.get("/country", (req, res) => {
  const countries = motoGP.map((race) => race.winner.country);
  const countryList = countries.join(", ");
  res.send(`${countryList}`);
});

app.get("/names", (req, res) => {
  const names = motoGP.map(
    (race) => `${race.winner.firstName} ${race.winner.lastName}`
  );
  const nameList = names.join(", ");
  res.send(nameList);
});

app.get("/", (req, res) => {
  res.json(motoGP);
});

app.all("*", (req, res) => {
  res.status(400).send("Bad Request");
});

app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
