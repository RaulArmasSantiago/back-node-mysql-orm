import { Router } from "express";
import Company from "../../model/company.model";

const router = Router()

router.post("/company", async(req,res) => {
  await Company.sync()
  const body = req.body
  const createCompany = await Company.create({
    name: body.name,
    manager: body.manager,
    rate: body.rate,
    jump: body.jump,
    approval: body.approval,
    validity: body.validity,
    concesion: body.concesion,
    price: body.price
  })

  res.status(201).json({
    ok: true,
    status:201,
    message: "La empresa fue creada exitosamente",
    body: {
      company: createCompany
    }
  })
})

export default router