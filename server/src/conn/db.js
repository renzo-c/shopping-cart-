import Sequelize from 'sequelize';
import productModel from './product';
import orderModel from './order';
import productOrder from './productOrder';
// require('dotenv').config();
const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

// modeling tables through define
const Product = db.define('product', productModel);
const Order = db.define('order', orderModel);
const ProductOrder = db.define('productOrder', productOrder);

// Associations
Product.belongsToMany(Order, { through: ProductOrder });
Order.belongsToMany(Product, { through: ProductOrder });

db.sync({ force: true }).then(() => {
  return Product.bulkCreate([
    {
      name: 'Yogurt Laive',
      price: 23.0,
      stock: 24,
      picture: 'image_01'
    },
    {
      name: 'Jamon Braedt',
      price: 30.0,
      stock: 15,
      picture: 'image_02'
    },
    {
      name: 'Espinaca Florencia',
      price: 10.0,
      stock: 4,
      picture: 'image_03'
    }
  ]);
});

export default db;
