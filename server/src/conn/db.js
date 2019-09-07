import Sequelize from 'sequelize';
import productModel from './product';
import orderModel from './order';

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

// Associations
Product.belongsToMany(Order, { through: 'productOrder' });
Order.belongsToMany(Product, { through: 'productOrder' });

db.sync({ force: true }).then(() => {
  return Product.create({
    name: 'Leche Bella Holandesa',
    price: 5.42,
    stock: 24
  });
});

export default db;
