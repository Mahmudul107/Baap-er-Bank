// Step -1: Add event handler to the deposit button.
document.getElementById('btn-deposit').addEventListener('click', function(){
// Step -2: Get the deposit amount from the input field.
    // For input field use .value to get input from the input field.
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);
// Step -3: Get the current deposit total.
    // For non-input ( element other than input, textarea ) use innertext to get the text.
    const totalDepositElement = document.getElementById('total-deposit');
    const previousTotalDepositString = totalDepositElement.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString)
    

// Step -4: Add number to set the total.
    const totalDeposit = newDepositAmount + previousTotalDeposit;
    // Set the deposit total.
    totalDepositElement.innerText = totalDeposit;
    

// Step -5: Get current balance total.
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceString = totalBalance.innerText;
    const previousBalance = parseFloat(previousBalanceString);

// Step -6: Calculate current total balance.
    const currentBalanceTotal = previousBalance + newDepositAmount;
    // Set the balance total.
    totalBalance.innerText = currentBalanceTotal;

    // Clear the deposit value
    depositField.value =''
})

