import express from 'express'
import db from './database'

const app = express()
app.use(express.json())
app.listen(3000, () => {
  const date = new Date()
  console.log(`Server OK! - ${date}`) 
})

app.post('/users', async (request, response) => {
  const body = request.body

  await db('users').insert({
    name: body.name,
    email: body.email,
    password: body.password
  })

  return response.json({}).status(200)
})

app.get("/users", async (request, response) => {
  try {
    const users = await db("users").select("id", "name", "email");
    return response.json(users);
  } catch (error) {
    response.status(500).json({ error: "Erro ao buscar usuários" });
  }
})
