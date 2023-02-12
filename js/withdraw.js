// Step -1: Add event handler to the withdraw button.
document.getElementById('btn-withdraw').addEventListener('click', function () {
    console.log('Withdraw button clicked');


    // Step -2: Get the withdraw amount from the withdraw input field.
    const withdrawField = document.getElementById('withdraw-field');

    // Convert string into number by using parseFloat.
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step -3: Get previous withdraw total.
    const totalWithdrawElement = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = totalWithdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);




    // Set total withdraw amount.
    // Step -5: Get the previous balance total.
    const totalBalanceElement = document.getElementById('total-balance');
    const previousBalanceString = totalBalanceElement.innerText;
    const totalPreviousBalance = parseFloat(previousBalanceString);

    // Step -7: Clear the withdraw value.
    withdrawField.value = '';

    if (newWithdrawAmount > totalPreviousBalance) {
        alert('You do not have enough balance');
        return;
    }

    // Step -4: Calculate the withdraw total.
    const totalWithdraw = newWithdrawAmount + previousWithdrawTotal;
    totalWithdrawElement.innerText = totalWithdraw;


    // Step -6: Calculate new balance total
    // Set the new balance total.
    const newBalanceTotal = totalPreviousBalance - newWithdrawAmount;
    totalBalanceElement.innerText = newBalanceTotal;


    
})