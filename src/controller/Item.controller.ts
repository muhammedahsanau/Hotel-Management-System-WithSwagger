import { IITEM } from '../types/document/IITEM';
import { MainItem } from '../repositories/Item.repositories';
import CustomeError from '../utills/error';
import { Get, Route, Tags, Post, Body, Path, Put, Delete, SuccessResponse,Security } from "tsoa";
import { SaveUpdateResItem } from '../types/Response/Item.responce'; 
import { DeleteItem, GetItem, SaveReqItem, UpdateReqItem,search ,getItemPrice} from '../types/Request/Item.request';
@Route('Items')
@Tags('PMS - Items')
@Security('api_key')
export class ItemController {
  constructor() { }
  // @Post("/getItemByID")
  // async getItem(@Body() getreq:GetItem): Promise<SaveUpdateResItem> {
  //   const admin= await new MainAdmin().getProduct(getreq.id);
  //   if (admin === null) throw new CustomeError(404, 'Admin not found');
  //   return <SaveUpdateResItem>admin;
  // }
 
 
  // @Post('/saveItem')
  // async saveItem(@Body() admin: SaveReqItem): Promise<SaveUpdateResItem> {
  //   const new_admin:IITEM = await new MainItem().saveItem(<IITEM>(admin));
  //   return <SaveUpdateResItem>(new_admin);
  // }
  // @Put('/updateItem')
  // async updateItem(@Body() admin: UpdateReqItem): Promise<SaveUpdateResItem> {
  //   const update_admin = await new MainItem().updateItem(<IITEM>(admin));
  //   if (update_admin === null)
  //     throw new CustomeError(400, 'product not updated');
  //   return <SaveUpdateResItem>update_admin;
  // }
  // @Delete('/deleteItem')
  // @SuccessResponse("200","product deleted")
  // async deletItem(@Body() delreq: DeleteItem) {
  //   return await new MainItem().deletItem(delreq.id);
  // }
  // @Post('/getItemlist')
  // async getItemList(): Promise<SaveUpdateResItem[]> {
  //   const admin: IITEM[] = await new MainItem().getItemslist();
  //   return <SaveUpdateResItem[]>(admin);
  // }

  // @Post('/getItemsbyPrice')
  // async getItemByPrice(@Body() admin: getItemPrice): Promise<SaveUpdateResItem[]> {
  //   const newadmin: IITEM[] = await new MainItem().getItemsByPrice(admin.item_price);
  //   return <SaveUpdateResItem[]>(newadmin);
  // }

}
