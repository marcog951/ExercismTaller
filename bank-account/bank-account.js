export class BankAccount {
  constructor() {
  }

  get balance() {
      if (this._balance == undefined) {
        throw new ValueError;
      } else {
        return this._balance;
      }
  }

  set balance(amount) {
    this._balance = amount;
  }

  open() {
    if (this._balance != undefined) {
      throw new ValueError;
    } else {
    this.balance = 0;
    }
  }

  close() {
    if (this._balance == undefined) {
      throw new ValueError;
    } else {
    delete this._balance;
    }
  }

  deposit(amount) {
    if (this._balance == undefined || amount < 0) {
      throw new ValueError;
    } else {
      this.balance += amount;
    }
  }

  withdraw(amount) {
    if (this._balance == undefined || this._balance < amount || amount < 0) {
      throw new ValueError;
    } else {
    this.balance -= amount;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}