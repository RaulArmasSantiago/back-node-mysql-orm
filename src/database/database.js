import { Sequelize} from 'sequelize'

const sequelize = new Sequelize('products_test', 'userveritax', '123456',{
  host:'localhost',
  dialect: 'mysql',
  port: 3306
})

export default sequelize