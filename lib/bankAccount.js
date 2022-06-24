class BankAccount {
  constructor() {
    this.balance = 0
    this.balanceTracker = [0]
  }

  deposit(amount) {
    this.balance += amount
    let newBalance = this.balance
    this.balanceTracker.push(newBalance)
  }

  withdraw(amount) {
    this.balance -= amount
    let newBalance = this.balance
    this.balanceTracker.push(newBalance)
  }
}

module.exports = BankAccount