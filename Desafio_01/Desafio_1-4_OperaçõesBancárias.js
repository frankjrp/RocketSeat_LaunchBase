/* Crie um programa para realizar operações bancárias na conta de um usuário. */

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

const transaction01 = {
    type: "credit",
    value: 100.5
}

const transaction02 = {
    type: "debit",
    value: 95.5
}

const transaction03 = {
    type: "credit",
    value: 108.5
}

const transaction04 = {
    type: "debit",
    value: 89.5
}

const transaction05 = {
    type: "credit",
    value: 80.5
}

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === "credit") {
        user.balance += transaction.value;
    } else if (transaction.type === "debit") {
        user.balance -= transaction.value;
    }
}

function getHigherTransactionByType(transactionType) {
    let higherValue = 0;
    let obj;

    for (transaction of user.transactions) {
        if (transaction.type === transactionType && transaction.value > higherValue) {
            higherValue = transaction.value;
            obj = transaction;
        }
    }

    return obj;
}

function getAverageTransactionValue() {
    let sumTransactions = 0;

    for (transaction of user.transactions) {
        sumTransactions += transaction.value;
    }

    return sumTransactions / user.transactions.length;
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }

    for (transaction of user.transactions) {
        if (transaction.type === "credit") {
            count.credit++;
        } else {
            count.debit++;
        }
    }

    return count;
}

createTransaction(transaction01);
createTransaction(transaction02);
createTransaction(transaction03);
createTransaction(transaction04);
createTransaction(transaction05);

console.log("Balance: " + user.balance.toFixed(2))

console.log(getHigherTransactionByType("credit"))
console.log(getHigherTransactionByType("debit"))

console.log("Average transaction value: " + getAverageTransactionValue().toFixed(2))

console.log(getTransactionsCount())