//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Get all contacts
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.json({ message: "Get this contact" });
};

//@desc Create contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  console.log("Your details is", req.body);
  const { name, email, phone } = req.body;
  if (!name || !phone || !email) {
    res.status(400);
    throw new Error("All data are requires");
  }
  res.status(201).json({ message: "Create New contacts" });
};

//@desc Update this contacts
//@route PUT /api/contacts
//@access public
const updateContact = (req, res) => {
  res.json({ message: `Update contacts for ${req.params.id}` });
};

//@des Delete this contacts
//@route Delete /api/contacts
//@access public
const deleteContact = (req, res) => {
  res.json({ message: `Delete contacts for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
