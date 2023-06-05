function func() {
    let num0 = Number(document.getElementById("num0").value);
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let num4 = Number(document.getElementById("num4").value);
    let num5 = Number(document.getElementById("num5").value);
    let result = num0 + num1 * 2000 + num2 * 5000 - num3 - num4 + num5 + "тг";
    if (num1 > 15) {
        result = num0 + num1 * 2000 + num2 * 6000 - num3 - num4 + num5 + "тг";
    }




    document.getElementById("result").innerHTML = result;
}