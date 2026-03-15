import express from "express"

const app = express()

app.use(express.json())
app.get("/", (req, res) => {
    return res.json({message: "API rodando"})
})

app.listen(3000, () => {
    console.log("Server running in port 3000")
})
