const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/breaches/:account", async (req, res, next) => {
  let account = req.params.account;
  try {
    const response = await axios.get(
      `https://haveibeenpwned.com/api/v3/breachedaccount/${account}?truncateResponse=false`,
      {
        headers: {
          "hibp-api-key": "11a561d02d894b5ba7239d6d1500e73a",
        },
      }
    );
    res.send(response.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
