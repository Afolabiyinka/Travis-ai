import express from "express"
import cors from "cors"


const app = express()
const port = process.env.PORT || 7000;
app.use(cors())

app.get("/", (req,res) =>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`)
})
