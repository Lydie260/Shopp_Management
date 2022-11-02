import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    quantity:Number,
    price:Number,
    user:{
        type:mongoose.Schema.objectId,
        ref:"user",
    },
    product:{
        type:mongoose.Schema.objectId,
        ref:"product"
    },
    isPaid:{
        type:Boolean,
        default:true,
    },

},{timestamps:true}
);
Schema.pre(/^find/,function(next){
    this.populate({
        path:"user",
        Schema:"-password"
    });
    this.populate({path:"product"});
    next();
})
export default mongoose.model("purchase",Schema);