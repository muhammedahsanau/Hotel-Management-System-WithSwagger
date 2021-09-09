
export interface SaveReqOrder{
     customerName:string,
     tableNo:string,
     item: string[],
    //  waiter:object,
    //  o_status:String,
     o_discription: string,
    }
    export interface UpdateReqOrder {
      _id: string;
      customerName:string,
      tableNo:string,
      item:string[] ,
      waiter:string,
      // o_status:String,
      o_discription: string,
    }
    // export interface UpdateReqOrder {
    //   _id: string;
    //   item:object[] ,
    //   waiter:object,
    //   o_quantity:String,
    
    //   o_discription: String,
    // }
    export interface GetOrder {
      id: string
    }
    export interface GetOrderByStatus {
      o_status:string
    }
    export interface getordersByWaiterId {
      id: string
    }
    export interface DeleteOrder {
      id: string
    }
    export interface updateOrder_readyOrDelivered {
      id: string
    }
    export interface updateOrder_Delivered {
      id: string
    }
    export interface SearchReqOrder {
      
      item:string[],
  
    }
   