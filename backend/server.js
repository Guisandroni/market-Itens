
import express from 'express'
import dotenv from 'dotenv'
import { conectDB } from './config/db.js'
import produtoRoutes from './routes/produto.routes.js'

const  app = express()
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 2000
app.use('/api/produtos',produtoRoutes)



    //console.log(process.env.MONGO_URL)
app.listen(2000,() =>{
    conectDB();
    console.log("Server is running in http://localhost:" + PORT)
})
//TPrwawUlDm3XMpBJ npm install mongodb