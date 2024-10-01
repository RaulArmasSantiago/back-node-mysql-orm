import {Router} from 'express'
import {faker} from '@faker-js/faker'
import {io} from '../app/app'

import Products from '../model/product.model'

const router = Router()

router.get("/products", async(req,res) => {
  const products = await Products.findAll();
  io.emit('message', `Se obtuvo la info de productos`)
   res.status(200).json({
    ok: true,
    status: 200,
    body: {
      products
    }
   })
})

router.get("/products/:id", async (req,res) => {
  const id = req.params.id
  const product = await Products.findOne({
    where: {product_id: id}
  })
  res.status(200).json({
    ok: true,
    status: 200,
    body: {
      product
    }
   })
})

router.post("/products", async (req,res) => {
  await Products.sync(); //Valida si existe la tabla si no eiste la crea y si existe no hace nada
  const createProduct = await Products.create({
    product_name: faker.commerce.product(),
    price: faker.commerce.price(),
    is_stock: faker.datatype.boolean()
  })

  res.status(201).json({
    ok: true,
    status:201,
    message: "El producto fue creado exitosamente",
    body: {
      product: createProduct
    }
  })
})

router.put("/products", (req,res) => {
  res.send("I am a ROUTER")
})

router.delete("/products", (req,res) => {
  res.send("I am a ROUTER")
})

export default router