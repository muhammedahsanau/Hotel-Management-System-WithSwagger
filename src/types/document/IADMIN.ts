import { Document } from 'mongoose';
export interface IADMIN extends Document {
  _id:string;
  admin_name: string,
  admin_email: string, 
  admin_password: string,
  createdAt?: string;
  updatedAt?: string;
}