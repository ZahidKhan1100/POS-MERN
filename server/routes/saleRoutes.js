const express = require("express");
const SaleController = require("../controllers/SaleController");

const router = express.Router();

router.route("/addsale").post(SaleController.addSale);

module.exports = router;
