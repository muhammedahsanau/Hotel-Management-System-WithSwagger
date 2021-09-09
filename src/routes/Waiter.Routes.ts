import express from "express";
import { WaiterController } from "../controller/Waiter.controller";
const userjwt = require("jsonwebtoken");
import {
  DeleteOrder,
  GetOrder,
  SaveReqOrder,
  UpdateReqOrder,
  SearchReqOrder,
  
  updateOrder_readyOrDelivered
} from "../types/Request/order.request";
import { IITEM } from "../types/document/IITEM";
import {
  DeleteItem,
  GetItem,
  SaveReqItem,
  UpdateReqItem,
  search,
  getItemPrice,
  getwaiterID,
} from "../types/Request/Item.request";
import { ITEMSchema } from "../model/Item.model";
import { SaveUpdateResItem } from "../types/Response/Item.responce";
import { IWAITER } from "../types/document/IWAITER";
import { OrderController } from "../controller/Order.controller";
import { SaveReqWaiter, GetWaiter } from "../types/Request/waiter.request";
import { SaveUpdateResWaiter } from "../types/Response/waiter.responce";
const bcrypt = require("bcrypt");
require("dotenv").config();
import CustomeError from "../utills/error";
const WaiterAuth = require("../middlewares/WaiterAuth");
const AdminAuth = require("../middlewares/AdminAuth");
const jwt = require("jsonwebtoken");
import { SaveUpdateResOrder } from "../types/Response/order.responce";
export class WaiterRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {

    //route for waiter login
    this.router.post("/loginwaiter", async (req, res, next) => {
      try {
        const getreq: GetWaiter = req.body;
        const waiter: SaveUpdateResWaiter =
          await new WaiterController().authwaiter(getreq);
        const ACCESS_TOKEN_SECRET: String =
          "adhoashdoaisjfodmsovhsoevioseijvosmeoviwer3455ty54yrty5yDeleteProductGetproductSaveReqProductUpdateReqProductsearchgetProductPrice";
        const accessToken = jwt.sign(
          { waiter_email: waiter.waiter_email, waiter_id: waiter._id },
          ACCESS_TOKEN_SECRET
        );
        res.header("token", accessToken);
        res.send(waiter);
      } catch (error) {
        next(error);
      }
    });
    this.router.post("/getorderById", WaiterAuth, async (req, res, next) => {
      try {
        const getreq: GetOrder = req.body;
        const Order: SaveUpdateResOrder = await new WaiterController().getorder(
          getreq
        );
        res.send(Order);
      } catch (error) {
        next(error);
      }
    });



    //place new order for waiter 
    this.router.post("/PlaceNewOrder", WaiterAuth, async (req, res, next) => {
      try {
        const order: any = req.body;
                const authHeader = req.header("Authorization");
                const token = authHeader && authHeader.split(" ")[1];
                if (!token) {
                  return res.sendStatus(401);
                }
                const ACCESS_TOKEN_SECRET: string =
                  "adhoashdoaisjfodmsovhsoevioseijvosmeoviwer3455ty54yrty5yDeleteProductGetproductSaveReqProductUpdateReqProductsearchgetProductPrice";
                const decoded = userjwt.verify(token, ACCESS_TOKEN_SECRET);        
                const waiter = decoded;
                order.waiter=waiter.waiter_id
        const newOrder: SaveUpdateResOrder =
          await new WaiterController().saveorder(order);       
        res.status(200).json({
          Order: newOrder,
        });
      } catch (error) {
        next(error);
      }
    });



    
    this.router.post(
      "/GetBillByOrderId",
      WaiterAuth,
      async (req, res, next) => {
        try {
          const getreq: GetOrder = req.body;
          const Order: number = await new WaiterController().getorderforBill(
            getreq
          );
          res.json({
            Bill: Order,
          });
        } catch (error) {
          next(error);
        }
      }
    );

 


    this.router.put("/updateorder", WaiterAuth, async (req, res, next) => {
      try {
        const order: UpdateReqOrder = req.body;
        const upadated_order: SaveUpdateResOrder =
          await new WaiterController().updateorder(order);
        const response = {
          upadated_order,
        };
        res.status(200).json({
          message: response,
        });
      } catch (error) {
        next(error);
      }
    });




    this.router.put(
      "/updateOrderToDelivered",
      WaiterAuth,
      async (req, res, next) => {
        try {
          const delreq: updateOrder_readyOrDelivered = req.body;
          const Deleted_order = await new WaiterController().updateOrderToDelivered(
            delreq
          );
          res.status(200).json({
            message: "order updated to Delivered",
          });
        } catch (error) {
          next(error);
        }
      }
    );




    this.router.post("/getItemByID", WaiterAuth, async (req, res, next) => {
      try {
        const getreq: GetItem = req.body;
        const admin: SaveUpdateResItem = await new WaiterController().getItem(
          getreq
        );
        res.send(admin);
      } catch (error) {
        next(error);
      }
    });



    this.router.post("/getMenu", async (req, res, next) => {
      try {
        const adminList: SaveUpdateResItem[] =
          await new WaiterController().getItemList();
        res.status(200).json({
          result: adminList,
        });
      } catch (error) {
        next(error);
      }
    });





    this.router.post("/getMyOrderlist", WaiterAuth, async (req, res, next) => {
      try {
        const authHeader = req.header("Authorization");
        const token = authHeader && authHeader.split(" ")[1];
        if (!token) {
          return res.sendStatus(401);
        }
        const ACCESS_TOKEN_SECRET: string =
          "adhoashdoaisjfodmsovhsoevioseijvosmeoviwer3455ty54yrty5yDeleteProductGetproductSaveReqProductUpdateReqProductsearchgetProductPrice";
        const decoded = userjwt.verify(token, ACCESS_TOKEN_SECRET);

        const waiter = decoded;
        const orderList: SaveUpdateResOrder[] =
          await new WaiterController().getorderListByWaiterId();
        const new_order_list: SaveUpdateResOrder[] = [];
        for (let index = 0; index < orderList.length; index++) {
          if (waiter.waiter_id == orderList[index].waiter) {
            new_order_list.push(orderList[index]);
          }
        }
        res.status(200).json({
          result: new_order_list,
        });
      } catch (error) {
        next(error);
      }
    });




    this.router.post("/getItemsbyPrice", async (req, res, next) => {
      try {
        const item: getItemPrice = req.body;
        const adminList: SaveUpdateResItem[] =
          await new WaiterController().getItemByPrice(item);
        res.status(200).json({
          result: adminList,
        });
      } catch (error) {
        next(error);
      }
    });



  }
}
export const WaiterRoutesApi = new WaiterRoutes().router;
