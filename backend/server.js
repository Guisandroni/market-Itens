
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { conectDB } from './config/db.js'
import produtoRoutes from './routes/produto.routes.js'

const  app = express()
app.use(express.json())
dotenv.config()

const PORT = process.env.PORT || 2000
app.use('/api/produtos',produtoRoutes)


//Config build production for deploy
const __dirname = path.resolve();

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")))

    app.get("*", (req,res)=> {
        res.sendFile(path.resolve(__dirname, "frontend", "dist" , "index.html"))
    })
}

    //console.log(process.env.MONGO_URL)
app.listen(PORT,() =>{
    conectDB();
    console.log("Server is running in http://localhost:" + PORT)
})
//TPrwawUlDm3XMpBJ npm install mongodb