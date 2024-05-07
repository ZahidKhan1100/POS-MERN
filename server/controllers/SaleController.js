const Sale = require("../models/Sale");
const Product = require("../models/Product");

async function addSale(req, res, next) {
  try {
    const { items, totalAmount } = req.body;

    // Remove 'description' property from each item
    const modifiedItems = items.map((item) => {
      const {
        description,
        category_id,
        category_name,
        quantity_in_stock,
        ...rest
      } = item;
      return rest;
    });

    const updateQuantity = items.map(async (item) => {
      const product = await Product.findById(item._id);
      if (product) {
        const updatedQuantity = product.quantity_in_stock - item.quantity;

        await Product.findByIdAndUpdate(
          item._id,
          {
            quantity_in_stock: updatedQuantity,
          },
          { new: true }
        );
      }
    });

    const sale = await Sale.create({
      name: "abc",
      items: modifiedItems,
      total_amount: totalAmount,
    });

    return res.json({ status: true, sale:sale });
  } catch (ex) {
    next(ex);
  }
}

module.exports = { addSale };
