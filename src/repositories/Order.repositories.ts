import { Model } from "mongoose";
import { ORDERSchema } from "../model/order.model";
import { IORDER } from "../types/document/IORDER";
import { IITEM } from "../types/document/IITEM";
import { ITEMSchema } from "../model/Item.model";
export class MainOrder {
  constructor() {}

  getOrder(id: string) {
    return ORDERSchema.findById(id).populate(
      "item",
      "item_name item_price item_discription -_id"
    );
  }

  getOrderByStatus(o_status: string) {
    return ORDERSchema.find({ o_status: o_status }).populate(
      "item",
      "item_name item_price item_discription -_id"
    );
  }

  saveOrder(Order: IORDER) {
    return new ORDERSchema(Order).save();
  }



  async GetOrder(id: string) {
    const Order: IORDER | any = ORDERSchema.findById(id).populate(
      "item",
      "item_name item_price item_discription -_id"
    );



    return ORDERSchema.findById(id).populate(
      "item",
      "item_name item_price item_discription -_id"
    );
  }



  updateOrder(Order: IORDER) {
    return ORDERSchema.findByIdAndUpdate(Order._id, Order, {
      new: true,
    }).populate("item", "item_name item_price item_discription -_id");
  }



  deletOrder(_id: string) {
    return ORDERSchema.findByIdAndDelete(_id);
  }



  update_toReady(_id: string) {
    return ORDERSchema.findByIdAndUpdate(_id, { o_status: "1" });
  }



  update_toDelivered(_id: string) {
    return ORDERSchema.findByIdAndUpdate(_id, { o_status: "2" });
  }



  getOrderslist() {
    return ORDERSchema.find()
      .populate("item", "item_name item_price item_discription -_id")
      .populate("waiter", "waiter_name waiter_email");
  }



  getOrderslistByWaiterId() {
    return ORDERSchema.find().populate(
      "item",
      "item_name item_price item_discription -_id"
    );
    // .populate("waiter", "waiter_name waiter_email _id");
  }



  getOrdersbyProductID(item: object) {
    return ORDERSchema.find({ product: item })
      .populate("item", "item_name item_price item_discription -_id")
      .populate("waiter", "waiter_name waiter_email -_id");
  }


}
