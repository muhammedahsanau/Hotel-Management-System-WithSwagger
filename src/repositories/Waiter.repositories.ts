import { USERSchema } from '../model/Waiter.model';  
import { IWAITER } from '../types/document/IWAITER';
import {  SaveReqWaiter,GetWaiter  } from '../types/Request/waiter.request';
const bcrypt = require('bcrypt');
export class MainWaiter {
  constructor() {}
  // getProduct(_id: string) {
  //   return PRODUCTSchema.findById(_id);
  // }

   savewaiter(user: IWAITER) {
    //   user = hash(user)
    // console.log(user.user_password);
    return new USERSchema(user).save();
  }



  authwaiter(user:GetWaiter) {
    return USERSchema.findOne({waiter_email: user.waiter_email});
  }
  // updateProduct(product: IPRODUCT) {
  //   return PRODUCTSchema.findByIdAndUpdate(product._id, product, {
  //     new: true
  //   });
  // }
  // deletProduct(_id: string) {
  //   return PRODUCTSchema.findByIdAndDelete(_id);
  // }
  // getProductslist() {
  //  return PRODUCTSchema.find();
  // }
  // getProductsOranges() {
  //   return PRODUCTSchema.find({p_name:"orange"});
  //  }
  //  getProductsByPrice(price:String) {
  //   return PRODUCTSchema.find({p_price:price});
  //  }
  //  getProductsGrapes() {
  //   return PRODUCTSchema.find({p_name:"grapes"});
  //  }
 
}
