import Sequelize from 'sequelize';

const orderModel = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  code: {
    type: Sequelize.STRING
  }
};

export default orderModel;
