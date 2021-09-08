
import { Schema, model } from 'mongoose';
import { IADMIN } from '../types/document/IADMIN';
const IAdminSchema = new Schema(
  {
    admin_name: { type: String, required: true, unique: true  },
    admin_email : {type: String, required: true, unique: true }, 
    admin_password : {type: String,required: true }
 
  },
  { timestamps: true },
   
);
export const ADMINSchema = model<IADMIN>('IAdmin_Schema', IAdminSchema);