var singleFlag = false;
var coupleFlag = false;
var income = 0;
var taxValue = 0;
var taxYear = 2020;
var minIncome = 9408;
var secondClassMax = 14532;
var secondClassParameter = 972.87;
var thirdClassMax = 57051;
var thirdClassParameter1 = 212.02;
var thirdClassParameter2 = 972.79;
var fourthClassMax = 270500;
var fourthClassParameter = 8963.74;
var fifthClassParameter = 17078.74;

function singleCouple() {
    var single = document.getElementById("single").checked;
    var couple = document.getElementById("couple").checked;
    if (single === true) {
        document.getElementById("single-income").style.display = "inline-block";
        document.getElementById("couple-income").style.display = "none";
        singleFlag = true;
        coupleFlag = false;
    } else if (couple === true) {
        document.getElementById("couple-income").style.display = "inline-block";
        document.getElementById("single-income").style.display = "none";
        coupleFlag = true;
        singleFlag = false;
    }
}
function calculate() {
    yearAction();
    if (singleFlag === true) {
        var singleIncome = document.getElementById("single-income-value").value;
        if (singleIncome == "") {
            alert("You should enter your yearly income in textbox first then press calculate button.");
        } else {
            singleIncome = parseFloat(singleIncome);
            tax(singleIncome);
            document.getElementById("form-output").style.visibility = "visible";
        }
    } else if (coupleFlag === true) {
        var firstIncome = document.getElementById("couple-income-first").value;
        var secondIncome = document.getElementById("couple-income-second").value;
        if (firstIncome == "" || secondIncome == "") {
            alert("You should enter your yearly income in textboxes first then press calculate button.");
        } else {
            firstIncome = parseFloat(firstIncome);
            secondIncome = parseFloat(secondIncome);
            var averageIncome = (firstIncome + secondIncome) / 2;
            averageIncome = averageIncome.toFixed(2);
            tax(averageIncome);
            taxValue *= 2;
            document.getElementById("form-output").style.visibility = "visible";
        }
    }
    document.getElementById("tax").innerHTML = taxValue;
}

function tax(income) {
    if (income <= minIncome) {
        taxValue = 0;
    } else if (income >= (minIncome + 1) && income <= secondClassMax) {
        var y = (income - minIncome) / 10000;
        taxValue = ((secondClassParameter * y) + 1400) * y;
    } else if (income >= (secondClassMax + 1) && income <= thirdClassMax) {
        var z = (income - secondClassMax) / 10000;
        taxValue = ((thirdClassParameter1 * z) + 2397) * z + thirdClassParameter2;
    } else if (income >= thirdClassMax && income <= fourthClassMax) {
        taxValue = (0.42 * income) - fourthClassParameter;
    } else {
        taxValue = (0.45 * income) - fifthClassParameter;
    }
    taxValue = taxValue.toFixed(2);
}

function yearAction() {
    var x = document.getElementById("tax-year").value;
    if (x == 2019) {
        minIncome = 9168;
        secondClassMax = 14254;
        secondClassParameter = 980.14;
        thirdClassMax = 55960;
        thirdClassParameter1 = 216.16;
        thirdClassParameter2 = 965.58;
        fourthClassMax = 265326;
        fourthClassParameter = 8780.90;
        fifthClassParameter = 16740.68;
    } else if (x == 2018) {
        minIncome = 9000;
        secondClassMax = 13996;
        secondClassParameter = 997.80;
        thirdClassMax = 54949;
        thirdClassParameter1 = 220.13;
        thirdClassParameter2 = 948.49;
        fourthClassMax = 260532;
        fourthClassParameter = 8621.75;
        fifthClassParameter = 16437.70;
    } else if (x == 2020) {
        minIncome = 9408;
        secondClassMax = 14532;
        secondClassParameter = 972.87;
        thirdClassMax = 57051;
        thirdClassParameter1 = 212.02;
        thirdClassParameter2 = 972.79;
        fourthClassMax = 270500;
        fourthClassParameter = 8963.74;
        fifthClassParameter = 17078.74;
    }
}