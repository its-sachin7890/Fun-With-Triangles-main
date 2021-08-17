const angleInput1 = document.getElementById("angle_input_1");

const angleInput2 = document.getElementById("angle_input_2");

const angleInput3 = document.getElementById("angle_input_3");

const submitBtn = document.querySelector(".submit_btn");

let output = document.querySelector(".output");

let error = document.querySelector(".error");


function angleTriangle(event){

    event.preventDefault();

   const input1 = parseInt(angleInput1.value);

   const input2 = parseInt(angleInput2.value);

   const input3 = parseInt(angleInput3.value);

   if(input1 && input2 && input3){
    if ( (input1 > 0) && (input1 < 180) && (input2 > 0) && (input2 < 180) && (input3 > 0) && (input3 < 180)){
        let sum = input1 + input2 + input3;
    
            if(sum == 180){
                output.innerHTML = "YuHu!!! These angles can make a triangle";
            }else{
                output.innerHTML = "These angles cannot make a triangle";
            }
       }
       else{
           error.innerHTML = "Angle values cannot be greater than 180";
       }
   }else{
       error.innerHTML = "Please fill all the required fields";
   }

}

submitBtn.addEventListener("click", angleTriangle);
