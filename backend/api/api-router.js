const router = require("express").Router();

// Routers


// routers.use

router.get("/", (req, res) => {
  res.send({
    Server: "Hi, I'm your Server.  Can I start you off with a drink?"
  });
});

module.exports = router;
