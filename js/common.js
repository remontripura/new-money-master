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