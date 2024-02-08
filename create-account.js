function createAccount(pin, amount) {
    let userPin;
    let balance;

    if (!userPin) userPin = pin;
    balance = amount ? amount : 0

    this.checkBalance = (pin) => {
        if (pin !== userPin) return 'Invalid PIN.'
        return `$${balance}`
    }

    this.deposit = (pin, amount) => {
        if (pin !== userPin) return 'Invalid PIN.'
        balance += amount
        return `Succesfully deposited $${amount}. Current balance: $${balance}.`
    }

    this.withdraw = (pin, amount) => {
        if (pin !== userPin) return 'Invalid PIN.'
        if (balance - amount < 0) return 'Withdrawal amount exceeds account balance. Transaction cancelled.'
        balance -= amount
        return `Succesfully withdrew $${amount}. Current balance: $${balance}.`
    }

    this.changePin = (pin, amount) => {
        if (pin !== userPin) return 'Invalid PIN.'
        userPin = amount
        return 'PIN successfully changed!'
    }    

    return {
        checkBalance: this.checkBalance,
        deposit: this.deposit,
        withdraw: this.withdraw,
        changePin: this.changePin    
    }
}

module.exports = { createAccount };
