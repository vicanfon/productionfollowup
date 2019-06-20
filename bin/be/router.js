const express = require("express");
const ctl = require("./controllers");

const router = express.Router();


// API ROUTES

// warnings
router.route("/warnings").get(ctl.warnings.get);
router.route("/warnings").post(ctl.warnings.create);


// measures
router.route("/measures").get(ctl.measures.get);
router.route("/measures").post(ctl.measures.create);

// machines
router.route("/machines").get(ctl.machines.get);
router.route("/machines").post(ctl.machines.create);
router.route("/machines").patch(ctl.machines.update);
router.route("/machines").delete(ctl.machines.delete);

// users
router.route("/users").get(ctl.users.get);
router.route("/users").post(ctl.users.create);
router.route("/users").patch(ctl.users.update);
router.route("/users").delete(ctl.users.delete);

module.exports = router;
