export interface Order {
  id?: string;
  retailerId: string;
  date: string;
  updatedAt: Date;
  status: string; //대기(미발행), 초안, 완료(영수)
  isDeleted: boolean;
}

export interface Retailer {
  id: string;
  name: string;
  format: OrderFormat;
  addressInfo: AddressInfo; // 추가
  numberInfo: NumberInfo; // 추가
  emailInfo: EmailInfo; // 추가
  ceoName: string; // 추가
  businessInfo: BusinessInfo; // 추가
  bankInfo: BankInfo; // 추가
  wholesaler: Wholesaler[]; // 추가
}

export interface Task {
  id: string;
  order: string;
  productCode: string;
  productName: string;
  productOption: string;
  productPrice: number;
  requestedComment: string;
  requestedQuantity: number;
  retailer: string;
  state: State; //사입관련정보
  type: string; //구분
  wholesaler: string;
  isDeleted: boolean;
}

export interface Wholesaler {
  id: string;
  name: string;
  address: WholesalerAddress;
  contacts: WholesalerContact[];
  bankInfos: BankInfo[];
}

export interface WholesalerExpression {
  id?: string;
  wholesalerId: string;
  retailerId: string;
  expression: string; // 주소,전화번호,상호명
}

export interface State {
  checkOut: CheckOut;
  comment: string;
  id: string;
  quantity: number;
  status: string;
  types: number;
}

export interface WholesalerContact {
  content: string;
  type: string;
}

export interface WholesalerAddress {
  building: Building;
  floor: string;
  detail: string;
}

export interface Building {
  id?: string;
  displayName: string;
  fullName: string;
  simpleName?: string;
}

export interface BankInfo {
  id: number;
  bank: string;
  accountNumber: string;
  owner: string;
  type: string;
  isActive: number;
  createdAt: number;
  updatedAt: number;
}

export interface AddressInfo {
  office: string;
  warehouse: string;
}

export interface NumberInfo {
  office: number;
  ceo: number;
}

export interface EmailInfo {
  order: string;
  ceo: string;
}

export interface BusinessInfo {
  registerName: string;
  registerNumber: number;
}

export interface OrderFormat {
  formatItems: OrderFormatItem[];
}

export interface OrderFormatItem {
  name: string;
  type: string;
  ordinal: number;
}

export interface Invoice {
  id?: string;
  invoiceId?: string;
  retailerId: string;
  orderId: string;
  amount: number;
  status?: number;
  version?: number;
  createdAt?: number;
  updatedAt?: number;
  invoiceWholesalerItems?: InvoiceWholesalerItem[];
}

export interface InvoiceWholesalerItem {
  id?: string;
  orderId: string;
  retailerId: string;
  wholesalerId: string;
  invoiceItems: Array<InvoiceItem>;
  inStoreCredit: number;
  isTaxIncluded: boolean;
  isTaxFormIssued: boolean;
  totalPrice: number;
  returnTotal: number;
  isApplyReturn: boolean;
  isCashPrepaid: boolean;
}

export interface InvoiceItem {
  id?: string;
  invoiceId?: string;
  orderId: string;
  taskId: string;
  retailerId: string;
  wholesalerId: string;
  productName: string;
  productCode: string;
  productOption: string;
  productPrice: number;
  requestComment: string;
  requestQuantity: number;
  state: InvoiceItemState;
  type: string;
}

export interface InvoiceItemState {
  id?: string;
  stateId: string;
  quantity: number;
  comment: string;
  status: number;
  checkOut: boolean;
  type: number;
}

export interface InStoreCredit {
  id?: string;
  retailerId: string;
  wholesalerId: string;
  amount: number;
}

export interface CheckOut {
  id: number;
  isCheckedOut: boolean;
}

export interface User {
  key: string;
  id: string;
  password: string;
}
