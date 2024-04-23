const contactModel = require("../model/contactModel");

exports.fetchContact = async (req, res) => {
  const contact = await contactModel.find();
  res.send(contact);
};

exports.add = async (req, res) => {
  console.log(req.body);
  const contact = await contactModel.create(req.body);
  res.status(201).send(contact);
};
