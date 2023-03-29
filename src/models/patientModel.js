const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const patients = sequelize.define("patients", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    temperature: {
        type: DataTypes.STRING,
        allowNull: true
    },
},{
    timestamps: false
});

module.exports=patients