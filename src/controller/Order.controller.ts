import { IORDER } from '../types/document/IORDER';
import { MainOrder } from '../repositories/Order.repositories';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse,Security } from "tsoa";
import { SaveUpdateResOrder } from '../types/Response/Order.responce'; 
import { DeleteOrder, GetOrder, SaveReqOrder, UpdateReqOrder,SearchReqOrder } from '../types/Request/Order.request';

@Route('orders')
@Tags('PMS - Orders')
// @Security('api_key')
export class OrderController {
  constructor() { }

 

  // //save order
  // @Post('/saveorder')
  // async saveorder(@Body() order: SaveReqOrder): Promise<SaveUpdateResOrder> {
  //   const new_admin:IORDER = await new MainAdmin().saveOrder(<IORDER>(order));
  //   return <SaveUpdateResOrder>(new_admin);
  // }

  //update order
  // @Put('/updateorder')
  // async updateorder(@Body() admin: UpdateReqOrder): Promise<SaveUpdateResOrder> {
  //   const update_admin = await new MainAdmin().updateOrder(<IORDER>(admin));
  //   if (update_admin === null)
  //     throw new CustomeError(400, 'order not updated');
  //   return <SaveUpdateResOrder>update_admin;
  // }


  // //delete order
  // @Delete('/deleteorder')
  // @SuccessResponse("200","product deleted")
  // async deletorder(@Body() delreq: DeleteOrder) {
  //   return await new MainOrder().deletOrder(delreq.id);
  // }


  //get list of all orders
  // @Post('/getorderlist')
  // async getorderList(): Promise<SaveUpdateResOrder[]> {
  //   const admin: IORDER[] = await new MainOrder().getOrderslist();
  //   if (admin === null) throw new CustomeError(404, 'Order not found');
  //   return <SaveUpdateResOrder[]>(admin);
  // }


  //get order by product id
  // @Post('/getorderbyProductID')
  // async searchorderByproduct(@Body() getreq:SearchReqOrder): Promise<SaveUpdateResOrder[]> {
  //   const admin: IORDER[] = await new MainOrder().getOrdersbyProductID(getreq.item);
  //   return <SaveUpdateResOrder[]>(admin);
  // }

    // //get order by quantity
    // @Post('/getorderbyOrderQuantity')
    // async searchorderByquantity(@Body() getreq:SearchReqQuantity): Promise<SaveUpdateResOrder[]> {
    //   const admin: IORDER[] = await new MainOrder().getOrdersbyOrderQuantity(getreq.o_quantity);
    //   return <SaveUpdateResOrder[]>(admin);
    // }
}
