import { connect, connection } from 'mongoose';
export class DbMongo {
  constructor() {
  }
  // connect(h: string, dbName: string, u?: string, pass?: string, p?: number) 
  connect(con_str:string)
              
  {
    // let connectionuri = `mongodb://${h}:${p}/${dbName}`;
    let connectionuri = con_str
    // if (u != undefined && pass != undefined) {
    //   connectionuri = `mongodb+srv://${u}:${pass}@${h}/${dbName}`;
    // }
    connect(connectionuri, (err: any) => {
      if (err) {
        console.log(err);
        console.log('DataBase Connection Falied');
      } else {
        console.log('connected with database');
      }
    });
  }
}
export const MonStatConnection = connection.readyState;