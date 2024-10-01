import express from 'express'
import {createServer} from 'http'
import {Server} from 'socket.io'
import cors from 'cors'
import morgan from 'morgan'
import router from '../router/product.router'

import routerAuth from '../router/auth/auth.router'
import routerUser from '../router/user/user.router'
import routerCompany from '../router/company/company.router'

const app = express()
const httpServer = createServer(app)
export const io = new Server(httpServer);


app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.get('/', (req,res) => {
  res.send("Estoy funcionando")
})

io.on('connection', (socket) => {
  console.log('Nueva conexion: ', socket.id);

  socket.on('message', (msg) => {
    console.log(('Mensaje recibido: ', msg))

    io.emit('message', `Servior recibió: ${msg}`)
  });

  socket.on('disconnect', () => {
    console.log('CLiente desconectado:', socket.id)
  })
})

app.use("/api/v1", router)

app.use("/api/v1", routerAuth)
app.use("/api/v1", routerUser)
app.use("/api/v1", routerCompany)


export default httpServer;