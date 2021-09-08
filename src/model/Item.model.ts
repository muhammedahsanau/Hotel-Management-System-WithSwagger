
import { Schema, model } from 'mongoose';
import { IITEM } from '../types/document/IITEM';
const IItemSchema = new Schema(
  {
    item_name: { type: String  },
    item_price:{type: String }, 
    item_type: { type: String },
    item_size: { type: String },
  },
  { timestamps: true },
   
);
export const ITEMSchema = model<IITEM>('IITEM_Schema', IItemSchema);