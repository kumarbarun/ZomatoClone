import { Schema, model } from "mongoose";

const contactUsSchema = new Schema({
    _id:String,
    name:{type:String},
    email:{type:String},
    message:{type:String}
}, { versionKey: false })

//                    mongodb file name
export default model('contactUs', contactUsSchema);