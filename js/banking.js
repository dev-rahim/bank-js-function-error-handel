function getInputValue(inputFildId) {
    const inputFild = document.getElementById(inputFildId);
    const inputText = inputFild.value;
    const inputAmmount = parseFloat(inputText);
    inputFild.value = '';
    return inputAmmount;
}
function updateTotalAmmount(inputAmmount, totalAmmountId) {
    const previousTotalDipositeAmmountText = document.getElementById(totalAmmountId).innerText;
    const previousTotalDipositeAmmountFloatingNumber = parseFloat(previousTotalDipositeAmmountText);
    document.getElementById(totalAmmountId).innerText = previousTotalDipositeAmmountFloatingNumber + inputAmmount;
}
function updateBalance(inputAmmount, isAdd) {
    const totalBalanceText = document.getElementById('total-balance').innerText;
    const totalBalanceAmmount = parseFloat(totalBalanceText);
    if (isAdd == true) {
        document.getElementById('total-balance').innerText = totalBalanceAmmount + inputAmmount;
    }
    else {
        document.getElementById('total-balance').innerText = totalBalanceAmmount - inputAmmount;
    }

}





// update  diposite total 

document.getElementById('diposit-button').addEventListener('click', function () {
    // const dipositeInputFild = document.getElementById('diposit-fild');
    // const ammountOfNewdipositinText = dipositeInputFild.value;
    // const ammountOfNewdipositInFlotingNumber = parseFloat(ammountOfNewdipositinText);
    const dipositInputValue = getInputValue('diposit-fild');
    if (dipositInputValue > 0) {
        updateTotalAmmount(dipositInputValue, 'diposite-total-ammount');
        updateBalance(dipositInputValue, true);
    }
    else {
        alert('Please input valid ammount')
    }

    // const previousTotalDipositeAmmountText = document.getElementById('diposite-total-ammount').innerText;
    // const previousTotalDipositeAmmountFloatingNumber = parseFloat(previousTotalDipositeAmmountText);
    // document.getElementById('diposite-total-ammount').innerText = previousTotalDipositeAmmountFloatingNumber + dipositInputValue;
    // update  balance total
    // const totalBalanceText = document.getElementById('total-balance').innerText;
    // const totalBalanceAmmount = parseFloat(totalBalanceText);
    // document.getElementById('total-balance').innerText = totalBalanceAmmount + dipositInputValue;
    // console.log(totalBalanceAmmount + ammountOfNewdipositInFlotingNumber);

    // CLEAR FILD 
    // dipositeInputFild.value = '';

})




// update  withdeow total 

document.getElementById('withdrow-button').addEventListener('click', function () {
    // const widthrowInputFild = document.getElementById('withdrow-fild');
    // const widthrowInputFildText = widthrowInputFild.value;
    // const widthrowAmmount = parseFloat(widthrowInputFildText);
    const totalBalance = parseFloat(document.getElementById('total-balance').innerText);
    const widthrowAmmount = getInputValue('withdrow-fild');
    if (widthrowAmmount > 0 && widthrowAmmount < totalBalance) {
        updateTotalAmmount(widthrowAmmount, 'withdrow-total-ammount');
        updateBalance(widthrowAmmount, false);
    }
    else {
        if (widthrowAmmount < totalBalance) {
            alert("Your total balance is= " + totalBalance + " you can't withdrow more then you have");
        }
        else {
            alert('Please input valid ammount');
        }
    }

    // const previusWithdeowTotalText = document.getElementById('withdrow-total-ammount').innerText;
    // const previusWithdeowTotalFloatNumber = parseFloat(previusWithdeowTotalText);
    // document.getElementById('withdrow-total-ammount').innerText = widthrowAmmount + previusWithdeowTotalFloatNumber;

    // UPDATE BALANCE 
    // const totalBalanceText = document.getElementById('total-balance').innerText;
    // const totalBalanceAmmount = parseFloat(totalBalanceText);
    // document.getElementById('total-balance').innerText = totalBalanceAmmount - widthrowAmmount;

    // CLEAR FILD 
    // widthrowInputFild.value = '';

})