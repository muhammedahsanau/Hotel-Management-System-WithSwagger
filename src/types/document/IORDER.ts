import { Document } from 'mongoose';
 
export interface IORDER extends Document {
  _id:string;
  customerName:string,
  tableNo:string,
  item: object[],
  waiter:object,
  o_status:string,
  o_discription: string,
  o_msg:string,
  createdAt?: string;
  updatedAt?: string;
}