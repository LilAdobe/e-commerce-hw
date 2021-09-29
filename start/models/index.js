// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'product_id',
})
// Categories have many Products
Category.hasMany(Category,{
  foreignKey: 'product_id',
})
// Products belongToMany Tags (through ProductTag)
Category.belongsToMany(Tag, {
  through: ProductTag
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
