import { ADMINSchema } from '../model/Admin.model';  
import { IADMIN } from '../types/document/IADMIN';
import {  SaveReqAdmin,GetAdmin  } from '../types/Request/Admin.request';
export class MainAdmin {
  constructor() {}
  // getProduct(_id: string) {
  //   return PRODUCTSchema.findById(_id);
  // }
  saveAdmin(admin: IADMIN) {
    return new ADMINSchema(admin).save();
  }

  authAdmin(admin:GetAdmin) {
    return ADMINSchema.findOne({admin_email: admin.admin_email});
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
