const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const incomeBtn = document.getElementById("incomeBtn");
const expenseBtn = document.getElementById("expenseBtn");
const incomeList = document.getElementById("incomeList");
const expenseList = document.getElementById("expenseList");
const balanceSpan = document.getElementById("balance");

let balance = 0;

function addTransaction(type) {
    const desc = descInput.value.trim();
    const amountStr = amountInput.value.trim();
    const amount = Number(amountStr);
    if (!desc || !amountStr || isNaN(amount)) {
        return;
    }

    const li = document.createElement("li");
    if (type === "income") {
        li.textContent = `${desc} - ${amount} kr (Inkomst)`;
        incomeList.appendChild(li);
        balance += amount;
    } else if (type === "expense") {
        li.textContent = `${desc} - ${amount} kr (Utgift)`;
        expenseList.appendChild(li);
        balance -= amount;
    }

    balanceSpan.textContent = balance;
    descInput.value = "";
    amountInput.value = "";
}

incomeBtn.addEventListener("click", function () {
    addTransaction("income");
});

expenseBtn.addEventListener("click", function () {
    addTransaction("expense");
});