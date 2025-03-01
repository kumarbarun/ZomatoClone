// const { required } = require("joi");
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    _id:Schema.Types.ObjectId,
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}
})

export default model('user', userSchema);