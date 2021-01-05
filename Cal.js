var Height;
var Weight;
var Ages;
var BMI;
var BMR;
var TDEE;
var Gender;
var Choice;

window.onload = function () {
    BMI_CAL();
    BMR_CAL();
}

function BMI_CAL() {
    var Cal_BMI = document.getElementById("Cal_BMI");
    Cal_BMI.onclick = function () {
        Height = document.getElementById('BMI_Height').value;
        Weight = document.getElementById('BMI_Weight').value;
        var BMI_Result = document.getElementById('BMI_Result')
        var h5 = document.getElementById('Result_BMI');
        var p1 = document.getElementById('p1');
        var p2 = document.getElementById('p2');
        var p3 = document.getElementById('p3');
        var p4 = document.getElementById('p4');

        BMI = Weight / ((Height / 100) ** 2);

        if (BMI > 40) {
            BMI_Result.innerHTML = BMI.toFixed(2);;
            h5.innerHTML = "Obesity class III";
            p1.innerHTML = "1. Food should be controlled by reducing the amount of food or changing the food from more energy-consuming to low-energy foods.";
            p2.innerHTML = "2. You should move and do aerobic exercise regularly every day or almost every day, at least moderately tired by breathing more 40-60 minutes per day.";
            p3.innerHTML = "3. Should train muscle strength. With exercise or lifting weights";
            p4.innerHTML = "4. Should consult a doctor or a specialist in weight loss and control.";
        } else if (BMI >= 35) {
            BMI_Result.innerHTML = BMI.toFixed(2);;
            h5.innerHTML = "Obesity class II"
            p1.innerHTML = "1. Food should be controlled by reducing the amount of food or changing the food from more energy-consuming to low-energy foods.";
            p2.innerHTML = "2. You should move and do aerobic exercise regularly every day or almost every day, at least moderately tired by breathing more 40-60 minutes per day.";
            p3.innerHTML = "3. Should train muscle strength. With exercise or lifting weights";
            p4.innerHTML = "4. Should consult a doctor or a specialist in weight loss and control.";
        } else if (BMI >= 30) {
            BMI_Result.innerHTML = BMI.toFixed(2);;
            h5.innerHTML = "Obesity class I"
            p1.innerHTML = "1. Food should be controlled by reducing the amount of food or changing the food from more energy-consuming to low-energy foods.";
            p2.innerHTML = "2. You should move and do aerobic exercise regularly every day or almost every day, at least moderately tired by breathing more 40-60 minutes per day.";
            p3.innerHTML = "3. Should train muscle strength. With exercise or lifting weights";
            p4.innerHTML = "4. Should consult a doctor or a specialist in weight loss and control.";
        } else if (BMI >= 25) {
            BMI_Result.innerHTML = BMI.toFixed(2);;
            h5.innerHTML = "Pre-obesity"
            p1.innerHTML = "1. Food should be controlled by reducing the amount of food or changing the food from more energy-consuming to low-energy foods.";
            p2.innerHTML = "2. You should move and do aerobic exercise regularly every day or almost every day, at least moderately tired by breathing more 40-60 minutes per day.";
            p3.innerHTML = "3. Should train muscle strength. With exercise or lifting weights";
            p4.innerHTML = ""
        } else if (BMI >= 18.5) {
            BMI_Result.innerHTML = BMI.toFixed(2);;
            h5.innerHTML = "Normal weight"
            p1.innerHTML = "1. Food should be controlled by reducing the amount of food or changing the food from more energy-consuming to low-energy foods.";
            p2.innerHTML = "2. You should move and do aerobic exercise regularly every day or almost every day, at least moderately tired by breathing more 40-60 minutes per day.";
            p3.innerHTML = ""
            p4.innerHTML = ""
        } else {
            BMI_Result.innerHTML = BMI.toFixed(2);;
            h5.innerHTML = "Underweight"
            p1.innerHTML = "1. Should eat a variety of food to complete the 5 food groups in the right proportions and more quantity.";
            p2.innerHTML = "2. Should move and exercise regularly every day or almost every day. To be moderately tired by taking a short breath";
            p3.innerHTML = ""
            p4.innerHTML = ""
        }
    }
}

function BMR_CAL() {
    var Cal_BMR = document.getElementById('Cal_BMR');
    Cal_BMR.onclick = function () {
        Height = document.getElementById('hight').value;
        Weight = document.getElementById('weight').value;
        Gender = document.getElementById('gender').value;
        Ages = document.getElementById('ages').value;
        Choice = document.getElementById('work').value;
        var BMR_Result = document.getElementById('BMR_Result');
        if (Gender == 1) {
            BMR = 66 + (13.7 * Weight) + (5 * Height) - (6.8 * Ages);
            BMR_Result.innerHTML = BMR.toFixed(0);
            TDEE_CAL(BMR, Choice);
        } else {
            BMR = 655 + (9.6 * Weight) + (1.8 * Height) - (4.7 * Ages);
            BMR_Result.innerHTML = BMR.toFixed(0);
            TDEE_CAL(BMR, Choice);
        }
    }
}

function TDEE_CAL(BMR, Choice) {
    var TDEE_Result = document.getElementById('TDEE_Result');
    switch (Choice) {
        case "1":
            TDEE = BMR * 1.2;
            console.log(TDEE);
            TDEE_Result.innerHTML = TDEE.toFixed(0);
            break;
        case "2":
            TDEE = BMR * 1.375;
            TDEE_Result.innerHTML = TDEE.toFixed(0);
            break
        case "3":
            TDEE = BMR * 1.55;
            TDEE_Result.innerHTML = TDEE.toFixed(0);
            break;
        case "4":
            TDEE = BMR * 1.725;
            TDEE_Result.innerHTML = TDEE.toFixed(0);
            break;
        case "5":
            TDEE = BMR * 1.9;
            TDEE_Result.innerHTML = TDEE.toFixed(0);
            break;
        default:
            TDEE_Result.innerHTML = "-";
            break;
    }
}