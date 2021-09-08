import { Document } from 'mongoose';
export interface IITEM extends Document {
  _id:string;
  item_name: String,
  item_price:String, 
  item_size: String,
  item_type: String,
  createdAt?: string;
  updatedAt?: string;
}