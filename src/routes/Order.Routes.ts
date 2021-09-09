import express from 'express';

import { IORDER } from '../types/document/IORDER';
import { DeleteOrder, GetOrder, SaveReqOrder, UpdateReqOrder,SearchReqOrder } from '../types/Request/order.request';
import { OrderController } from '../controller/Order.controller';
import { SaveUpdateResOrder } from '../types/Response/order.responce';
import CustomeError from '../utills/error';
const  UserAuth  =require("../middlewares/WaiterAuth") ;
const  AdminAuth  =require("../middlewares/AdminAuth") ;

export class OrderRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() { 
    // this.router.post('/getorderById', async (req, res, next) => {
    //   try {
    //     const getreq:GetOrder = req.body;
    //       const Order:SaveUpdateResOrder = await new OrderController().getorder(getreq);
    //       res.send(Order);
    //   } catch (error) {
    //     next(error);
    //   }  
    // });

    // this.router.post('/saveorder', async (req, res, next) => {
    //   try {
    //     const order: SaveReqOrder = req.body;
    //     const newOrder:SaveUpdateResOrder = await new OrderController().saveorder(order);
    //     res.status(200).json({
    //       message: newOrder
    //     });
    //   } catch (error) {
    //     next(error);
    //   }
    // });
    // this.router.put('/updateorder', async (req, res, next) => {
    //   try {
    //     const order: UpdateReqOrder = req.body;
    //     const upadated_order:SaveUpdateResOrder = await new OrderController().updateorder(order);
    //     const response = {
    //       upadated_order,
    //     };
    //     res.status(200).json({
    //       message: response
    //     });
    //   } catch (error) {
    //     next(error);
    //   }
    // });
    // this.router.delete('/deleteorder', async (req, res, next) => {
    //   try {
    //     const delreq:DeleteOrder = req.body;
    //     const Deleted_order = await new OrderController().deletorder(delreq);
    //     res.status(200).json({
    //       message: 'order deleted'
    //     });
    //   } catch (error) {
    //     next(error);
    //   }
    // });
    // this.router.post('/getorderlist', async (req, res, next) => {
    //   try {
    //     const adminList: SaveUpdateResOrder[] = await new OrderController().getorderList();
    //     res.status(200).json({
    //       result: adminList
    //     });

    //   } catch (error) {
    //     next(error);
    //   }
    // });
    // this.router.post('/getorderbyProductID', async (req, res, next) => {
    //   try {
    //     const order: SearchReqOrder = req.body;
    //     const adminList: SaveUpdateResOrder[] = await new OrderController().searchorderByproduct(order);
    //     res.status(200).json({
    //       result: adminList
    //     });

    //   } catch (error) {
    //     next(error);
    //   }
    // });

  }
}
export const OrderRoutesApi = new OrderRoutes().router;