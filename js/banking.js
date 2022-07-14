// update  diposite total 
const dipositeInputFild = document.getElementById('diposit-fild');
document.getElementById('diposit-button').addEventListener('click', function () {
    const previousTotalDipositeAmmountText = document.getElementById('diposite-total-ammount').innerText;
    const previousTotalDipositeAmmountFloatingNumber = parseFloat(previousTotalDipositeAmmountText);
    const ammountOfNewdipositinText = dipositeInputFild.value;
    const ammountOfNewdipositInFlotingNumber = parseFloat(ammountOfNewdipositinText);
    document.getElementById('diposite-total-ammount').innerText = previousTotalDipositeAmmountFloatingNumber + ammountOfNewdipositInFlotingNumber;
    // update  balance total
    const totalBalanceText = document.getElementById('total-balance').innerText;
    const totalBalanceAmmount = parseFloat(totalBalanceText);
    document.getElementById('total-balance').innerText = totalBalanceAmmount + ammountOfNewdipositInFlotingNumber;
    // console.log(totalBalanceAmmount + ammountOfNewdipositInFlotingNumber);

    // CLEAR FILD 
    dipositeInputFild.value = '';

})




// update  withdeow total 

document.getElementById('withdrow-button').addEventListener('click', function () {
    const widthrowInputFild = document.getElementById('withdrow-fild');
    const widthrowInputFildText = widthrowInputFild.value;
    const widthrowAmmount = parseFloat(widthrowInputFildText);

    const previusWithdeowTotalText = document.getElementById('withdrow-total-ammount').innerText;
    const previusWithdeowTotalFloatNumber = parseFloat(previusWithdeowTotalText);

    document.getElementById('withdrow-total-ammount').innerText = widthrowAmmount + previusWithdeowTotalFloatNumber;

    // UPDATE BALANCE 
    const totalBalanceText = document.getElementById('total-balance').innerText;
    const totalBalanceAmmount = parseFloat(totalBalanceText);
    document.getElementById('total-balance').innerText = totalBalanceAmmount - widthrowAmmount;

    // CLEAR FILD 
    widthrowInputFild.value = '';

})