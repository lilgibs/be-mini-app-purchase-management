import express from "express";
import cors from "cors"

const app = express()
app.use(cors());
const port = 3000

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})

app.get(`/`, (req, res) => {
  return res.status(200).send({
    response: "Success"
  })
})