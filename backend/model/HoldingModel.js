const {model} =require("mongoose");
const {Schema} =require("mongoose");
const {HoldingSchema}=require("../schemas/HoldingSchema");


const HoldingModel=new model("holding",HoldingSchema);


module.exports={HoldingModel};;

