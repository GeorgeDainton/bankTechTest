const BankAccount = require('../lib/bankAccount')

describe('Bank Account', () => {
  
  it('Adds deposit amounts to the balance', () => {
    const bankAccount = new BankAccount()
    bankAccount.deposit(500)

    expect(bankAccount.balance).toEqual(500)
  })
})