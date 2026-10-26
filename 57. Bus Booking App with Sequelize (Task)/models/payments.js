const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/db-connection");

const Payments = sequelize.define(
  'payments_table',
  {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull: false,
    },
    amountPaid: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull:false
    },
    paymentStatus: {
      type: DataTypes.STRING,
      allowNull:false,
      defaultValue: 'pending'
    },
  });


module.exports=Payments;