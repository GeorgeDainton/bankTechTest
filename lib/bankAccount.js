class BankAccount {
  constructor() {
    this.balance = 0
    this.balanceTracker = []
  }

  deposit(amount) {
    this.balance += amount
    let newBalance = this.balance
    this.balanceTracker.push(newBalance)
  }

  withdraw(amount) {
    this.balance -= amount
  }
}

module.exports = BankAccount