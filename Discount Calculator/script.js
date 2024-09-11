function calculate(){
const Billamount=parseFloat(document.getElementById("billAmount").value);
const DiscountPercentage = parseFloat(document.getElementById('discountPercentage').value);

if (!isNaN(Billamount)&&!isNaN(DiscountPercentage)) {
    const DiscountAmount=(Billamount*DiscountPercentage)/100;
    const FinalPay=Billamount-DiscountAmount
    document.getElementById("discountAmount").value=DiscountAmount.toFixed(2);
    document.getElementById("finalPay").value=FinalPay.toFixed(2);


    
} else {
    alert("Please enter valid values.");
}

}
function reset(){
    document.getElementById("billAmount").value = "";
    document.getElementById("discountPercentage").value = "";
    document.getElementById("discountAmount").value = "";
    document.getElementById("finalPay").value = "";
}