const express = require("express");

const router = express.Router();

const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// router.get("/", (req, res) => {
//   res.json({ message: "Get all contacts" });
// });

// router.post("/", (req, res) => {
//   res.json({ message: "Create Net contacts" });
// });

// or this

// router.get("/", getContact).post(createContact);


router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)



module.exports = router;
