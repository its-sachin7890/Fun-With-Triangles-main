// Triangle containing base and height(first button)
let baseHeight = document.getElementById("base_height");

let output1 = document.querySelector("#output1");

let calculateBtn1 = document.querySelector("#submit_btn1");

let base = document.getElementById("base");

let height = document.getElementById("height");

// let baseHeightOutputForm = document.getElementById("base_and_height");

let baseAndHeightDiv = document.querySelector("#base_and_height");

let error_1 = document.querySelector(".error");



// If you have length of 3 sides(second button)

let lengthOf3SidesDiv = document.getElementById("length_of_3_sides");

let length3Sides = document.getElementById("length_3");

let inputA = document.getElementById("input_1");

let inputB = document.getElementById("input_2");

let inputC = document.getElementById("input_3");

let calculateBtn2 = document.querySelector("#submit_btn2");

let output2 = document.querySelector("#output2");

let showError = document.querySelector(".display_error");


//If you have 2 sides and included angle(third button)

let side1 = document.getElementById("input_a");

let side2 = document.getElementById("input_b");

let angleInput = document.getElementById("input_c");

let calculateBtn3 = document.querySelector("#submit_btn3");

let length2SidesAndAngle = document.getElementById("length_2_and_angle");

let output = document.getElementById("output3");

let PI = Math.PI;

let twoSidesAndAngle = document.querySelector("#two_sides_and_angle");

let error_3 = document.querySelector(".error_3");


// function to calculate area for 1st button
function calculateArea1(event){

    event.preventDefault();

    let baseValue = parseInt(base.value);

    let heightValue = parseInt(height.value);

    if(baseValue && heightValue){
        if(baseValue > 0 && heightValue > 0){

            let area = 0.5 * baseValue * heightValue;
            output1.innerHTML = "Area = " + area;
        }
        else{
            error_1.innerHTML = "Please enter valid values";
        }
    }else{
        error_1.innerHTML = "Please fill all the required fields";
    }
}


baseHeight.addEventListener("click", function(event){

    event.preventDefault();
    
    if(baseAndHeightDiv.style.display == 'none'){
        baseAndHeightDiv.style.display = 'block';
    }
});

calculateBtn1.addEventListener("click", calculateArea1);


// function to calculate area for 2nd button
function calculateArea2(event){

    event.preventDefault();

    let inputAValue = parseInt(inputA.value);

    let inputBValue = parseInt(inputB.value);

    let inputCValue = parseInt(inputC.value);

    if(inputAValue && inputBValue && inputCValue){
        if(inputAValue > 0 && inputBValue > 0 && inputCValue > 0){
            let s = (inputAValue + inputBValue + inputCValue) / 2;
    
            if(((inputAValue + inputBValue) >= inputCValue) && ((inputAValue + inputCValue) >= inputBValue) && ((inputBValue + inputCValue) >= inputAValue)){
    
                // Calculate area
                let area2 = Math.sqrt(s * ((s-inputAValue) * (s-inputBValue) * (s-inputCValue)));
    
                output2.innerHTML = "Area = " + area2;
            }
            else{
                showError.innerHTML = "Enter valid side lengths such that each side length should be less than sum of other two sides";
            }
        }else{
            showError.innerHTML = "Please enter valid values";
        }
    }
    else{
       showError.innerHTML = "Please fill all the required fields"; 
    }
}

length3Sides.addEventListener("click", function(event){

    event.preventDefault();

    if(lengthOf3SidesDiv.style.display == 'none'){
        lengthOf3SidesDiv.style.display = 'block';
    }

});

calculateBtn2.addEventListener("click", calculateArea2);



//function to calculate area for third button

function calculateArea3(event){
    event.preventDefault();

    let side1Value = parseInt(side1.value);

    let side2Value = parseInt(side2.value);

    let angleInputValue = parseInt(angleInput.value);

    // Input Validation
    if(side1Value && side2Value && angleInputValue){
        if(side1Value > 0 && side2Value > 0) {
            if(angleInputValue > 0.0001 && angleInputValue <= 360){
                let area = 0.5 * side1Value * side2Value * Math.sin(angleInputValue * PI / 180);
            output.innerHTML = "Area = " + area;
            }else{
                error_3.innerHTML = "Angle value must be between 0.0001 and 360";
            }
      }else{
         error_3.innerHTML = "Please enter valid values";
      }     
    }
    else{
        error_3.innerHTML = "Please fill all the required fields";
    } 
}

length2SidesAndAngle.addEventListener("click",function(event){

    event.preventDefault();

    if(twoSidesAndAngle.style.display == 'none'){
        twoSidesAndAngle.style.display = 'block';
    }
});

calculateBtn3.addEventListener("click", calculateArea3);


