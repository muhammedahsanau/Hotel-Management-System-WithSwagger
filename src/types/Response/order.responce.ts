import { Schema, model } from 'mongoose';

export interface SaveUpdateResOrder {
  customerName:string,
  tableNo:string,
  item: object[],
  waiter:object,
  o_status:string,
  o_discription: string,
  createdAt: string;
  updatedAt: string;
  }
  