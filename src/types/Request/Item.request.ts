export interface SaveReqItem{
  item_name: String,
  item_price:String, 
  item_size: String,
  item_type: String,
  }
  export interface UpdateReqItem {
    _id: string;
    item_name: String,
    item_price:String, 
    item_size: String,
    item_type: String,
  }
  export interface GetItem {
    id: string
  }
  export interface search {
    item_name: String,
  }
  export interface DeleteItem {
    id: string
  }
  export interface getItemPrice{
 
    item_price:String, 
    
    }
  export interface getwaiterID{
 
    waiter:object
      
    }
 