initialPrice = document.querySelector("#initial-price");
boughtQty = document.querySelector("#bought-qty");
currentPrice = document.querySelector("#current-price");
btnCheck = document.querySelector("#btn-check");
outputBox = document.querySelector("#output-box");
section = document.querySelector(".section");

function opMsg(msg) {
    outputBox.innerText = msg;
}

btnCheck.addEventListener("click", inputChecker);

function inputChecker() {
    outputBox.style.display = "flex";
    if (initialPrice.value > 0 && boughtQty.value > 0 && currentPrice.value > 0) {
        console.log("yeee");
        stockCalculator();
    } else {
        console.log("ohh");
        opMsg(`Please fill all fields`);
    }
}

function stockCalculator() {
    var proLoss = (currentPrice.value - initialPrice.value);
    var totProLoss = proLoss * boughtQty.value;
    var proLossPer = ((proLoss / initialPrice.value) * 100).toFixed(1);
    console.log(proLossPer)
    if (proLossPer > 0) {
        if (proLossPer > 50) {
            section.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            document.body.style.backgroundImage = "url('happy2.gif')";
        }else{
            document.body.style.backgroundImage = "none";
            section.style.backgroundColor = "rgba(255, 255, 255, 0.158)";
        }
        outputBox.style.backgroundColor = "green";
        opMsg(`Congrats, You have made ${proLossPer}% profit, that worth ₹${totProLoss}`);
    }
    if (proLossPer < 0) {
        if (proLossPer < -50) {
            section.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            document.body.style.backgroundImage = "url('sad.gif')";
        }else{
            document.body.style.backgroundImage = "none";
            section.style.backgroundColor = "rgba(255, 255, 255, 0.158)";
        }
        outputBox.style.backgroundColor = "red";
        opMsg(`Ohh!, You have made ${proLossPer*(-1)}% loss, worth ₹${totProLoss*(-1)}`);
    }
    if (proLossPer == 0) {
        opMsg(`Your stock price hasn't moved an inch`)
    }

}