
function inputField (inputId){
    const Field = document.getElementById(inputId);
    const FieldValueString = Field.value;
    const FieldValue = parseFloat(FieldValueString);
    return FieldValue;
}
function taxtValue (taxtId){
    const text = document.getElementById(taxtId);
    const taxtValueString = text.innerText;
    const taxtValue = parseFloat(taxtValueString);
    return taxtValue;
}
function taxtValueSetupById (taxtValue, value){
    const element = document.getElementById(taxtValue);
    element.innerText = value;
}
document.getElementById('btn-calculate').addEventListener('click', function(){
    // 1. income field function
    const incomeField = inputField('income-field');
    // 2. spending items
    const foodField = inputField('food-field');
    const rentField = inputField('rent-field');
    const clothField = inputField('cloth-field');
    // 3. total spending items sum.
    const totalSum = foodField + rentField + clothField;
    // 4. total expenses and total balance.
    const totalExpenses = taxtValue('total-expenses');
    taxtValueSetupById('total-expenses', totalSum);
    // 5. remain taka
    const remain = incomeField - totalSum;
    console.log(remain)
    const remainBalance = taxtValue('remain-balance');
    taxtValueSetupById('remain-balance', remain);
})