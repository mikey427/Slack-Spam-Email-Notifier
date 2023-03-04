const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// PUT YOUR SLACK CHANNEL LINK AS THE URL IN AXIOS REQUEST
app.post("/", function (req, res) {
  if (req.body.Type === "SpamNotification") {
    axios({
      method: "post",
      // PUT URL HERE
      url: "",
      data: { text: `Spam notification from ${req.body.Email}` },
    }).then(function (response) {
      res.send({ message: "Success! Message was delivered to Slack." });
    });
  } else {
    res.send({ message: "Success! However, no notification sent to Slack!" });
  }
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
