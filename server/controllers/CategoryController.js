const Category = require("../models/Category");

async function addCategory(req, res, next) {
  try {
    const { name, description } = req.body;
    const categoryExist = await Category.findOne({ name });
    if (categoryExist)
      return res.json({ message: "Category Exist", status: false });

    const category = await Category.create({
      name,
      description,
    });

    return res.json({ status: true, category });
  } catch (ex) {
    next(ex);
  }
}

async function getCategories(req, res, next) {
  try {
    const categories = await Category.find();
    return res.json({ status: true, categories });
  } catch (ex) {
    next(ex);
  }
}

module.exports = { addCategory, getCategories };
