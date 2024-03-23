const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json("Server working..."))
app.use("/jobs", require("./controllers/job.controller"));

app.use("*", (req, res) => res.status(404).json("API route not found"));

app.listen(PORT, () => console.log("Server listening on port " + PORT));
