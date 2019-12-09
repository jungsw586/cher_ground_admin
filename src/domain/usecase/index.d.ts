import {
  Retailer,
  Order,
  Invoice,
  InvoiceItem,
  InvoiceWholesalerItem,
  Task,
  Wholesaler,
  Building,
  WholesalerAddress,
  WholesalerExpression,
  InStoreCredit,
  WholesalerContact,
  BankInfo
} from "domain/entity";

//<-----------------------------------------Order Usecase StartLine--------------------------------->
//used in : 01.order_list, 02.order_list
export interface GetOrders {
  execute(): Promise<Order[]>;
}
export interface FilterOrders {
  execute(filterOption: string): Promise<Order[]>;
  //status(대기/완료)
}
export interface SortOrders {
  execute(sortOption: string): Promise<Order[]>;
  //retail name순 / 최신순 /
}
export interface FilterByDate {
  execute(from: Date, to: Date): Promise<Order[]>;
}
export interface SearchOrders {
  execute(keyWord: string): Promise<Order[]>;
  //retailer name,
}
export interface PrevOrders {
  execute(offset: string, limit: string): Promise<Order[]>;
}
export interface NextOrders {
  execute(offset: string, limit: string): Promise<Order[]>;
}

//used in : 03.order_detail, 06,order_edit
export interface GetTasks {
  execute(order: Order): Promise<Task[]>;
}

//used in : 11.order_edit
export interface SaveEditedOrder {
  // --> soft delete
  execute(tasks: Task[]): void;
}

//used in : 12.order_edit
export interface DeleteOrders {
  // --> soft delete
  execute(order: Order): void; //=>통신하면 promise 써야하는지, boolean,void
}

//used in : 18.order_import
export interface GetRetailers {
  execute(): Promise<Retailer[]>;
}

//used in : 26.order_add_replace
export interface CheckDupl {
  execute(orderId: string): Promise<boolean>; //=>통신하면 promise 써야하는지, boolean,void
}

//CheckDupl:true
// export interface AddTasks {
//   execute(orderId: string, tasks: Task[]): Promise<Task[]>;
// }
// export interface OverRideTasks {
//   execute(orderId: string, tasks: Task[]): Promise<Task[]>;
// }
//CheckDupl: false
// export interface AddOrder {
//   execute(orderId: string, tasks: Task[], retailerId: string): Promise<Task[]>;
// }

//used in : 23.order_import
export interface SaveTasks {
  execute(orderId: string, tasks: Task[]): Promise<void>;
}

//used in : 31.order_unrecognized_task
export interface CheckWholesalerName {
  execute(wholesalerExpression: Array<string>): Promise<boolean>;
}

//WS Expression
export interface SearchWholesale {
  execute(
    wholesalerAddress: WholesalerAddress
  ): Promise<WholesalerExpression[]>;
}
export interface AddWholesale {
  execute(wholesale: Wholesaler): Promise<WholesalerExpression[]>;
}
//assign
export interface SelectWholesale {
  execute(wholesale: Wholesaler): Promise<Task[]>;
}
//<-----------------------------------------Order Usecase EndLine----------------------------------->

//<-----------------------------------------Invoice Usecase StartLine----------------------------------->
//주문서 -> 청구서초안(수정가능) -> 영수(청구서완료)

//Invoice usecase
export interface GetInvoices {
  execute(invoice: Invoice): Promise<Invoice[]>;
}
//미발행 리스트
export interface AddInvoices {
  //execute():Promise
}
export interface GetInvoice {
  execute(retailer: InvoiceItem): Promise<InvoiceItem[]>;
}
//save draft
export interface SaveInvoiceList {
  execute(invoice: Invoice): Promise<Invoice[]>;
}

//ws name => task, 거래내역 invoicewholesaler => email 추가
export interface GetInvoiceDetail {
  execute(invoiceItem: InvoiceItem): InvoiceItem;
}

//save draft 청구서 재발행 --
export interface GetInvoice {
  execute(): any;
}

//삭제
export interface deleteInvoice {
  execute(): any;
}

export interface GetInvoiceVersionList {
  execute(): any;
}
//<-----------------------------------------Invoice Usecase EndLine----------------------------------->

//<-----------------------------------------Retailer Usecase StartLine----------------------------------->

export interface GetRetailers {
  execute(): Promise<Retailer[]>;
}

export interface AddRetailer {
  execute(retailer: Retailer): Promise<Retailer>;
}

export interface GetRetailerInfo {
  execute(retailer: Retailer): Promise<Retailer>;
}

export interface DeleteRetailer {
  execute(retailer: Retailer): Promise<Retailer[]>;
}

export interface GetWsExpression {
  execute(retailer: Retailer): Promise<Retailer>;
}

export interface DeleteWsExpression {
  execute(retailer: Retailer): Promise<Retailer>;
}

export interface GetCreditInfo {
  execute(retailer: Retailer): Promise<InStoreCredit[]>;
}

export interface SubtractCredit {
  execute(retailer: Retailer, amount: number, memo: string): Promise<Retailer>;
}

export interface AddPurchase {
  execute(
    retailer: Retailer,
    amount: number,
    type: string,
    memo: string
  ): Promise<Retailer>;
}
//<-----------------------------------------Retailer Usecase EndLine----------------------------------->

//<-----------------------------------------Wholesaler Usecase StartLine----------------------------------->
export interface GetWholesalers {
  execute(): Promise<Wholesaler[]>;
}
//<-----------------------------------------Wholesaler Usecase EndLine----------------------------------->

//<-----------------------------------------Building Usecase StartLine----------------------------------->
//1.Building_list_page(상가 리스트)
export interface GetBuildings {
  execute(): Promise<Building[]>;
}

//1.Building_list_page(상가 검색)
export interface SearchBuilding {
  execute(keyword: string): Promise<Building[]>;
  //상가fullname, 상가displayname, buildingId
}

//1.Building_list_page(상가 정렬)
export interface SortBulidings {
  execute(sortOption: string): Promise<Building[]>;
  //가나다순, 알파벳순
}

//1.Building_list_page(Pagenation)
export interface PrevBuildings {
  excute(offset: string, limit: string): Promise<Building[]>;
}
export interface NextBuildings {
  excute(offset: string, limit: string): Promise<Building[]>;
}
//2~4.Building_Add_page(상가 추가), 5.Building_Detail_page(상가 상세)
export interface AddBuilding {
  execute(building: Building): Promise<Building>;
  //displayname, fullname string으로 각각 안주어도 상관없는가요?
}

//7.Building_Delete_page(상가 삭제)
export interface DeleteBuilding {
  execute(building: Building): void;
}

//10.Building_WS_list_page(상가에 포하된 도매 목록)
export interface GetWholesalers {
  execute(building: Building): Promise<Wholesaler[]>;
}

//11~12.Building_WS_list_page(도매 상세)
export interface GetWholesaler {
  execute(wholesaler: Wholesaler): Promise<Wholesaler>;
  //total$$ 가 무엇을 의미하는가요?
}

//1.Building_Detail_ID(Edit) ??
export interface EditBuildingId {
  execute(building: Building): void;
}

//1.Building_Detail_Name
export interface GetBuildingFullName {
  execute(fullName: Building["fullName"]): Promise<Building["fullName"]>;
}
//2~8. Builiding_Detial_Name
export interface EditBuildingFullName {
  execute(fullName: Building["fullName"]): Promise<Building["fullName"]>;
}

//1.Building_Detail_Display_Name
export interface GetBuildingDisplayName {
  execute(
    displayName: Building["displayName"]
  ): Promise<Building["displayName"]>;
}

//2~8.Building_Detail_Display_Name
export interface EditBuildingDisplayName {
  execute(
    displayName: Building["displayName"]
  ): Promise<Building["displayName"]>;
}
//<-----------------------------------------Building Usecase EndLine----------------------------------->
