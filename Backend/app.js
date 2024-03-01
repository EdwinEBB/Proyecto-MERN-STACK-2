import  Express  from "express";
import cors from "cors"
//importamos la conexion a la DB
import db from "./database/db.js";
import rutas from "./routes/routes.js";

const app=Express()


app.use(cors())
app.use(Express.json())
app.use('/blogs',rutas)

try {
    await db.authenticate()
    console.log("conexion exitosa de la bd db sql")
} catch (error) {
    console.log(`el error es ${error}`)
}

app.get('/',(req,res)=>{
    res.send("Hola")
})

app.listen(8000,()=>{
    console.log("Servidor inicado en el puerto 8000")
})