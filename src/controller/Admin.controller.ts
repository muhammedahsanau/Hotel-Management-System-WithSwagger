import { IADMIN} from '../types/document/IADMIN';
import { IITEM } from '../types/document/IITEM';
import { MainAdmin } from '../repositories/Admin.repositories';
import { MainOrder } from '../repositories/Order.repositories';
import { MainItem } from '../repositories/Item.repositories';
import { IWAITER } from '../types/document/IWAITER';
import CustomeError from '../utills/error';
import { IORDER } from '../types/document/IORDER';
import { ADMINSchema } from '../model/Admin.model'; 
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse,Security } from "tsoa";
import { GetOrderByStatus,DeleteOrder, updateOrder_readyOrDelivered, SaveReqOrder, UpdateReqOrder,SearchReqOrder,SearchReqQuantity } from '../types/Request/Order.request';
import { DeleteItem, GetItem, SaveReqItem, UpdateReqItem,search ,getItemPrice} from '../types/Request/Item.request';
import { SaveUpdateResItem } from '../types/Response/Item.responce'; 
import { SaveUpdateResOrder } from '../types/Response/Order.responce'; 
import { SaveUpdateResAdmin } from '../types/Response/Admin.responce'; 
import {  SaveReqAdmin,GetAdmin  } from '../types/Request/Admin.request';
import {  SaveReqWaiter,GetWaiter  } from '../types/Request/waiter.request';
import { SaveUpdateResWaiter } from '../types/Response/waiter.responce'; 
import { MainWaiter } from '../repositories/Waiter.repositories';
const bcrypt = require('bcrypt');
require('dotenv').config()
@Route('admin')
@Tags('PMS - Admin')
export class AdminController {
  constructor() { }
  @Post('/RegisterAdmin')
  async saveAdmin(@Body() admin: SaveReqAdmin): Promise<SaveUpdateResAdmin> {
    const new_admin:IADMIN = await new MainAdmin().saveAdmin(<IADMIN>(admin));
    return <SaveUpdateResAdmin>(new_admin);
  }

  @Post("/adminlogin")
  async authAdmin(@Body() getreq:GetAdmin): Promise<SaveUpdateResAdmin> {
    const admin:any = await new MainAdmin().authAdmin(getreq);
    // console.log("getreq.user_password: " + getreq.admin_password);
    // console.log("user.user_password: " + admin.admin_password);
    if(!admin) throw new CustomeError(404, 'admin email or password is incorrect');
    
    const validPassword = await bcrypt.compare(getreq.admin_password, admin.admin_password)
 
    
    if(!validPassword) throw new CustomeError(404, 'admin email or password is incorrect');
    if (admin === null) throw new CustomeError(404, 'admin does not exist');

      return <SaveUpdateResAdmin>admin;
   
   
  }

  @Security('api_key')
  @Post('/Registerwaiter')
  async saveWaiter(@Body() user: SaveReqWaiter): Promise<SaveUpdateResWaiter> {
    const new_user:IWAITER = await new MainWaiter().savewaiter(<IWAITER>(user));
    return <SaveUpdateResWaiter>(new_user);
  }

  @Security('api_key') 
  @Delete('/deleteorder')
  @SuccessResponse("200","product deleted")
  async deletorder(@Body() delreq: DeleteOrder) {
    return await new MainOrder().deletOrder(delreq.id);
  }

  @Security('api_key') 
  @Put('/updateOrderToReady')
  @SuccessResponse("200","product updated")
  async updateOrderToReady(@Body() delreq: updateOrder_readyOrDelivered) {
    return await new MainOrder().update_toReady(delreq.id);
  }

  @Security('api_key') 
  @Post('/getorderlist')
  async getorderList(): Promise<SaveUpdateResOrder[]> {
    const admin: IORDER[] = await new MainOrder().getOrderslist();
    if (admin === null) throw new CustomeError(404, 'Order not found');
    return <SaveUpdateResOrder[]>(admin);
  }
  @Security('api_key') 
  @Post('/getorderbyItemID')
  async searchorderByproduct(@Body() getreq:SearchReqOrder): Promise<SaveUpdateResOrder[]> {
    const admin: IORDER[] = await new MainOrder().getOrdersbyProductID(getreq.item);
    return <SaveUpdateResOrder[]>(admin);
  }
    //get order by quantity
    @Security('api_key') 
    @Post('/getorderbyOrderQuantity')
    async searchorderByquantity(@Body() getreq:SearchReqQuantity): Promise<SaveUpdateResOrder[]> {
      const admin: IORDER[] = await new MainOrder().getOrdersbyOrderQuantity(getreq.o_quantity);
      return <SaveUpdateResOrder[]>(admin);
    }

    @Security('api_key')
    @Post("/getOrderByStatus")
    async getorderByStatus(@Body() getreq:GetOrderByStatus): Promise<SaveUpdateResOrder[]> {
      const admin:IORDER[]= await new MainOrder().getOrderByStatus(getreq.o_status);
      if (admin === null) throw new CustomeError(404, 'Order not found');
      return <SaveUpdateResOrder[]>admin;
    }
    @Security('api_key') 
    @Post('/saveItemInMenu')
    async saveItem(@Body() admin: SaveReqItem): Promise<SaveUpdateResItem> {
      const new_admin:IITEM = await new MainItem().saveItem(<IITEM>(admin));
      return <SaveUpdateResItem>(new_admin);
    }
    @Security('api_key') 
    @Put('/updateItemInMenu')
    async updateItem(@Body() admin: UpdateReqItem): Promise<SaveUpdateResItem> {
      const update_admin = await new MainItem().updateItem(<IITEM>(admin));
      if (update_admin === null)
        throw new CustomeError(400, 'product not updated');
      return <SaveUpdateResItem>update_admin;
    }
    @Security('api_key') 
    @Delete('/deleteItem')
    @SuccessResponse("200","product deleted")
    async deletItem(@Body() delreq: DeleteItem) {
      return await new MainItem().deletItem(delreq.id);
    }
}
