import { Document } from 'mongoose';
export interface IWAITER extends Document {
  _id:string;
  waiter_name: String,
  waiter_email: String, 
  waiter_password: String,
  createdAt?: string;
  updatedAt?: string;
}