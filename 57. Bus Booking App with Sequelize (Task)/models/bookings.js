const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../utils/db-connection");

const Bookings = sequelize.define(
  'bookings_Table',
  {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull: false,
    },
    seatNumber: {
      type: DataTypes.STRING,
      allowNull:false
    },
  });


module.exports=Bookings;