import Sequelize from 'sequelize';

const productModel = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT
  },
  stock: {
    type: Sequelize.INTEGER
  }
};

export default productModel;
