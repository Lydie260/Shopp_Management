import mongoose from "mongoose";
const Schema = new mongoose.Schema(
    {
        name: String,
        unity: String,
        description: String,
        isActive:{
            type:Boolean,
            default:true,
            
            
            
        },
    },
)