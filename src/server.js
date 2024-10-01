import app from './app/app'
import './model/associations'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Magic Happens in port: ${PORT}`)
})