import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Blogmodel=db.define('blogs',{
    titulo:{type:DataTypes.STRING},
    contenido:{type:DataTypes.STRING},
})

export default Blogmodel;