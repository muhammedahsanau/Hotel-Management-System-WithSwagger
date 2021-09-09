import { IWAITER } from '../types/document/IWAITER';
import { IITEM } from '../types/document/IITEM';
import { MainWaiter } from '../repositories/Waiter.repositories';
import CustomeError from '../utills/error';
import { MainOrder } from '../repositories/Order.repositories';
import { USERSchema } from '../model/Waiter.model'; 
import { IORDER } from '../types/document/IORDER';
import { ITEMSchema } from "../model/Item.model";
import { MainItem } from '../repositories/Item.repositories';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse,Security } from "tsoa";
import { SaveUpdateResWaiter } from '../types/Response/waiter.responce'; 
import {  SaveReqWaiter,GetWaiter  } from '../types/Request/waiter.request';
import { DeleteOrder, GetOrder, SaveReqOrder, UpdateReqOrder,updateOrder_readyOrDelivered,SearchReqQuantity } from '../types/Request/Order.request';
import { DeleteItem, GetItem, SaveReqItem, UpdateReqItem,search ,getItemPrice,getwaiterID } from '../types/Request/Item.request';
import { SaveUpdateResOrder } from '../types/Response/Order.responce'; 
import { SaveUpdateResItem } from '../types/Response/Item.responce'; 
const bcrypt = require('bcrypt');
require('dotenv').config()
@Route('waiter')
@Tags('PMS - Waiter')
// @Security('api_key') 
export class WaiterController {
  constructor() { }


  @Post("/loginwaiter")
  async authwaiter(@Body() getreq:GetWaiter): Promise<SaveUpdateResWaiter> {
    const waiter:any = await new MainWaiter().authwaiter(getreq);
 
    if(!waiter) throw new CustomeError(404, 'waiter email or password is incorrect');
    
    const validPassword = await bcrypt.compare(getreq.waiter_password, waiter.waiter_password)
 
    
    if(!validPassword) throw new CustomeError(404, 'waiter email or password is incorrect');
    if (waiter === null) throw new CustomeError(404, 'waiter does not exist');

      return <SaveUpdateResWaiter>waiter;
   
   
  }


  @Security('api_key')
  @Post("/getorderById")
  async getorder(@Body() getreq:GetOrder): Promise<SaveUpdateResOrder> {
    const admin= await new MainOrder().getOrder(getreq.id);
    if (admin === null) throw new CustomeError(404, 'Order not found');
    return <SaveUpdateResOrder>admin;
  }
// this is new change 

  //save order = > take order from the customer i.e from table.
  @Security('api_key')
  @Post('/PlaceNewOrder')
  async saveorder(@Body() order: SaveReqOrder): Promise<SaveUpdateResOrder> {
    
  const  new_admin = await new MainOrder().saveOrder(<IORDER>(order));
  console.log(typeof(new_admin));
  
  
   

    return <SaveUpdateResOrder>(new_admin);
  }
 //get all the orders taken by current login waiter
  @Security('api_key') 
  @Post('/getMyOrderlist')
  async getorderListByWaiterId(): Promise<SaveUpdateResOrder[]> {
    const admin: IORDER[] = await new MainOrder().getOrderslistByWaiterId();
    if (admin === null) throw new CustomeError(404, 'Order not found');
    return <SaveUpdateResOrder[]>(admin);
  }

 
  @Security('api_key')
  @Post("/GetBillByOrderId")
  async getorderforBill(@Body() getreq:GetOrder): Promise<number> {
    const Order:any= await new MainOrder().GetOrder(getreq.id);

    let bill:number = 0 
    for (let index = 0; index < Order.item.length; index++) {
       let item = Order.item[index];
       let x = item.item_price;
       let itemIpriceint: number = +x;
       bill = bill + itemIpriceint
       
     }
     console.log("bill::"+ bill);
    if (Order === null) throw new CustomeError(404, 'Order not found');

    return bill;
  }

  @Security('api_key')
  @Put('/updateorder')
  async updateorder(@Body() admin: UpdateReqOrder): Promise<SaveUpdateResOrder> {
    const update_admin = await new MainOrder().updateOrder(<IORDER>(admin));
    if (update_admin === null)
      throw new CustomeError(400, 'order not updated');
    return <SaveUpdateResOrder>update_admin;
  }

  @Security('api_key') 
  @Put('/updateOrderToDelivered')
  @SuccessResponse("200","product updated")
  async updateOrderToDelivered(@Body() delreq: updateOrder_readyOrDelivered) {
    return await new MainOrder().update_toDelivered(delreq.id);
  }

  @Security('api_key')
  @Post("/getItemByID")
  async getItem(@Body() getreq:GetItem): Promise<SaveUpdateResItem> {
    const admin= await new MainItem().getProduct(getreq.id);
    if (admin === null) throw new CustomeError(404, 'Admin not found');
    return <SaveUpdateResItem>admin;
  }
  @Security('api_key')
  @Post('/getItemlist')
  async getItemList(): Promise<SaveUpdateResItem[]> {
    const admin: IITEM[] = await new MainItem().getItemslist();
    return <SaveUpdateResItem[]>(admin);
  }
  @Security('api_key')
  @Post('/getItemsbyPrice')
  async getItemByPrice(@Body() admin: getItemPrice): Promise<SaveUpdateResItem[]> {
    const newadmin: IITEM[] = await new MainItem().getItemsByPrice(admin.item_price);
    return <SaveUpdateResItem[]>(newadmin);
  }
}
