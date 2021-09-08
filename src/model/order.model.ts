import { Schema, model } from "mongoose";
import { IORDER } from "../types/document/IORDER";
import { ITEMSchema } from "../model/Item.model";
 
const IOrderSchema = new Schema(
  {
    customerName:{type:String},
    tableNo:{type:String},
    item: [{ type: Schema.Types.ObjectId, ref: "IITEM_Schema" }],
    waiter: { type: Schema.Types.ObjectId, ref: "IWaiter_Schema" },
    o_status: { type: String, default:"0"},
    o_discription: { type: String },
  },
  { timestamps: true }
);
export const ORDERSchema = model<IORDER>("IOrder_Schema", IOrderSchema);
