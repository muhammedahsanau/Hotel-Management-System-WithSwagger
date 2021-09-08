import express from 'express';
import { ItemRoutesApi } from "./Item.Routes";
import { OrderRoutesApi } from "./Order.Routes";
import { WaiterRoutesApi } from "./Waiter.Routes";
import { AdminRoutesApi } from "./Admin.Routes";

export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
  
    
      this.router.use('/admin',AdminRoutesApi)
      this.router.use('/waiter',WaiterRoutesApi);
   
    }


}
export const MainApi = new MainRouter().router;


//// this.router.use('/products',ProductRoutesApi);
//// this.router.use('/orders',OrderRoutesApi);
// this.router.use('/Items',ItemRoutesApi);
// this.router.use('/orders',OrderRoutesApi);