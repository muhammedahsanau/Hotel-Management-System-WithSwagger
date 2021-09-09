import { Document } from 'mongoose';
export interface IWAITER extends Document {
  _id:string;
  waiter_name: string,
  waiter_email: string, 
  waiter_password: string,
  createdAt?: string;
  updatedAt?: string;
}