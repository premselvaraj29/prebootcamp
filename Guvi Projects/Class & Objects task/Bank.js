class Bank {
  constructor(code, address, atm = [], customer = [], account = []) {
    this._code = code;
    this._address = address;
    this._atm = atm;
    this._customer = customer;
    this._account = account;
  }
  manages() {}
  maintains() {}
}

class ATM {
  constructor(location, managedBy) {
    this._location = location;
    this._managedBy = managedBy;
  }
  identifies() {}
  transactions() {}
}

class Account {
  constructor(number, balance = 100, atmTransactions = [], customer) {
    this._number = number;
    this._balance = balance;
    this._atmTransactions = atmTransactions;
    this._customer = customer;
  }
  deposit() {
    console.log("Deposit()");
  }
  withdraw() {
    console.log("Withdraw()");
  }
  createTransaction() {
    console.log("createTransaction()");
  }
}

class CurrentAcc extends Account {
  constructor(accNumber, balance, savingsAcc) {
    super(accNumber, balance);
    this._savingsAcc = savingsAcc;
  }
  withdraw() {
    console.log("CurrentAcc withdraw()");
  }
}

class SavingAcc extends Account {
  constructor(accNumber, balance, currentAcc) {
    super(accNumber, balance);
    this._currentAcc = currentAcc;
  }
}

class ATMTransactions {
  constructor(transactionID, date, type, amount, postBalance, account) {
    this._transactionID = transactionID;
    this._date = date;
    this._type = type;
    this._amount = amount;
    this._postBalance = postBalance;
    this._account = account;
  }
  modifies() {
    console.log("ATM transaction Modifies()");
  }
}

class Customer {
  constructor(name, address, dob, cardNumber, pin, account = []) {
    this._name = name;
    this._address = address;
    this._pin = pin;
    this._dob = dob;
    this._cardNumber = cardNumber;
    this._account = account;
  }

  verifyPassword() {
    console.log("VerifyPassword()");
  }
}

function main() {}
