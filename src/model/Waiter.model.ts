import { Schema, model } from 'mongoose';
import { IWAITER } from '../types/document/IWAITER';
const IWaiterSchema = new Schema(
  {
    waiter_name: { type: String, required: true, unique: true  },
    waiter_email : {type: String, required: true, unique: true }, 
    waiter_password : {type: String,required: true }
  },
  { timestamps: true },
   
);
export const USERSchema = model<IWAITER>('IWaiter_Schema', IWaiterSchema);