import { Document } from 'mongoose';
export interface IITEM extends Document {
  _id:string;
  item_name: string,
  item_price:string, 
  item_size: string,
  item_type: string,
  createdAt?: string;
  updatedAt?: string;
}