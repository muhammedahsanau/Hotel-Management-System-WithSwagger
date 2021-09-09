import { Document } from 'mongoose';
 
export interface IORDER extends Document {
  _id:string;
  customerName:string,
  tableNo:string,
  item: string[],
  waiter:string,
  o_status:string,
  o_discription: string,
  o_msg:string,
  createdAt?: string;
  updatedAt?: string;
}