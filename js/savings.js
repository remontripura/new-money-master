
document.getElementById('saving-btn').addEventListener('click', function(){
    const incomeField = inputField('income-field');
    const savingField = inputField('saving-field');
    const savingsAmount = savingField * incomeField / 100;
    const savingTotal = taxtValue('saving-total');
    taxtValueSetupById('saving-total', savingsAmount);

    const foodField = inputField('food-field');
    const rentField = inputField('rent-field');
    const clothField = inputField('cloth-field');
    const totalSum = foodField + rentField + clothField + savingsAmount;
    const totalBalance = incomeField - totalSum;
    const BalanceTotal = taxtValue('balance-total');
    taxtValueSetupById('balance-total', totalBalance);
})