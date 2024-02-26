const express = require("express");
const bodyParser = require("body-parser");
const translate = require("translate-google");

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

app.post("/translate", async (req, res) => {
  try {
    if (!req.body || !req.body.text) {
      return res.status(400).json({ error: "Input missing in the request." });
    }
    const translatedText = await translate(req.body.text, { to: "fr" });
    res.json({ translation: translatedText });
  } catch (error) {
    console.error("Error in translation", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
