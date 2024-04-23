const express = require("express");

const { fetchContact, add } = require("../controllers/contactController");

const router = express.Router();

router.get("/", fetchContact);
router.post("/", add);
module.exports = router;
