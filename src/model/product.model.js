import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/database'

class Product extends Model {}

Product.init({
  product_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT(10,2),//(10: permite 10 numeros decimales, 2: permite 2 numoers decimales)
    allowNull: false 
  },
  is_stock: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
},{
  sequelize,
  modelName: 'Product'
});

export default Product