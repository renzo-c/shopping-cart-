import Sequelize from 'sequelize';

const productOrderModel = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  quantity: {
    type: Sequelize.INTEGER
  }
};

export default productOrderModel;
