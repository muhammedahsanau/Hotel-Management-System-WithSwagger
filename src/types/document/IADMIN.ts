import { Document } from 'mongoose';
export interface IADMIN extends Document {
  _id:string;
  admin_name: String,
  admin_email: String, 
  admin_password: String,
  createdAt?: string;
  updatedAt?: string;
}