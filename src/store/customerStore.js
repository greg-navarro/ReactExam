class CustomerStore {
  constructor() {
    makeAutoObservable(this);

    this.customerCode = customerCode ;
    this.customerName = customerName ;
    this.customerPhone = customerPhone;
    this.customerCity = customerCity ;
    this.customerState = customerState;
  }
}
