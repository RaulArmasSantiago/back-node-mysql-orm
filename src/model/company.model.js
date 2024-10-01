import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/database'
import User from './users.models';

class Company extends Model {}

Company.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manager: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rate: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  jump: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  approval: {
    type: DataTypes.STRING,
    allowNull: false
  },
  validity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  concesion: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Company'
});

export default Company