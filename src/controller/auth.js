import Users from "../model/users.models";
import Company from "../model/company.model";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req, res ) => {
  const {user, password} = req.body

  const existingUser = await Users.findOne({
    where: {user}
  })

  if (!existingUser) {
    return res.status(404).json({
      ok: false,
      status: 404,
      message: "usuario no encontrado"
    })
  }

  const isMatch = await bcrypt.compare(password, existingUser.password)
  if(!isMatch) {
    return res.status(401).json({
      ok: false,
      status: 401,
      message:"Contraseña incorrecta",
    })
  }

  const token = jwt.sign(
    {
      id: existingUser.id,
      user: existingUser.user,
      admin: existingUser.admin
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d"}
  )

  const company = await Company.findOne({where:{id: existingUser.fkIdCompany}})

  res.status(200).json({
    ok: false,
      status: 401,
      message:"",
      body: {
        token,
        company
      }
  })
}