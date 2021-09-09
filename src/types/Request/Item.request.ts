export interface SaveReqItem{
  item_name: string,
  item_price:string, 
  item_size: string,
  item_type: string,
  }
  export interface UpdateReqItem {
    _id: string;
    item_name: string,
    item_price:string, 
    item_size: string,
    item_type: string,
  }
  export interface GetItem {
    id: string
  }
  export interface search {
    item_name: string,
  }
  export interface DeleteItem {
    id: string
  }
  export interface getItemPrice{
 
    item_price:string, 
    
    }
  export interface getwaiterID{
 
    waiter:string
      
    }
 