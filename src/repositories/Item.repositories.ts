import { ITEMSchema } from '../model/Item.model';  
import { IITEM } from '../types/document/IITEM';
export class MainItem {
  constructor() {}
  getProduct(_id: string) {
    return ITEMSchema.findById(_id);
  }
  saveItem(item: IITEM) {
    return new ITEMSchema(item).save();
  }
  updateItem(item: IITEM) {
    return ITEMSchema.findByIdAndUpdate(item._id, item, {
      new: true
    });
  }
  deletItem(_id: string) {
    return ITEMSchema.findByIdAndDelete(_id);
  }
  getItemslist() {
   return ITEMSchema.find();
  }
  getItemsOranges() {
    return ITEMSchema.find({item_name:"orange"});
   }
   getItemsByPrice(price:string) {
    return ITEMSchema.find({item_price:price});
   }
   getItemsGrapes() {
    return ITEMSchema.find({item_name:"grapes"});
   }
 
}
