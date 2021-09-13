import { makeAutoObservable } from 'mobx';

class CustomerStore {
    customerCode = '';

    customerName = '';

    customerPhone = '';

    customerCity = '';

    customerState = '';

    constructor(customerCode, customerName, customerPhone, customerCity, customerState) {
      makeAutoObservable(this);

      this.customerCode = customerCode;
      this.customerName = customerName;
      this.customerPhone = customerPhone;
      this.customerCity = customerCity;
      this.customerState = customerState;
    }
}
