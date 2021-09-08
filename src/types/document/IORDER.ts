import { Document } from 'mongoose';
 
export interface IORDER extends Document {
  _id:string;
  customerName:String,
  tableNo:String,
  item: object[],
  waiter:object,
  o_status:String,
  o_discription: String,
  o_msg:String,
  createdAt?: string;
  updatedAt?: string;
}