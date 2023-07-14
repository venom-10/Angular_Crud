const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../db/db');

const userData = sequelize.define('userData', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false
    },
    imagepath: {
        type: DataTypes.STRING,
        allowNull: true
    },
})

module.exports = userData;