import { Schema, model } from 'mongoose';

export interface SaveUpdateResOrder {
  customerName:String,
  tableNo:String,
  item: object[],
  waiter:object,
  o_status:String,
  o_discription: String,
  createdAt: string;
  updatedAt: string;
  }
  