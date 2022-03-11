const router = require("express").Router();

//normally this goes in server.js but we're doing it a layer deeper so we can prepend all our api called with "/api/<route>"
router.use("/steering-committee", require("./steering-committee"))

module.exports = router;