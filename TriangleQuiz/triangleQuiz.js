let score = 0;

let submitBtn = document.querySelector(".submit_btn");

let output = document.querySelector(".output");

let questions = document.querySelectorAll(".questions");



// Question 1
let queYes1 = document.getElementById("que_yes1");

let queNo1 = document.getElementById("que_no1");

queYes1.addEventListener("click", function(){
    score += 1;
});



// Question 2
let queYes2= document.getElementById("que_yes2");

let queNo2= document.getElementById("que_no2");

queNo2.addEventListener("click", function(){
    score += 1;
    
});


// Question 3
let queYes3= document.getElementById("que_yes3");

let queNo3= document.getElementById("que_no3");

queYes3.addEventListener("click", function(){
    score += 1;
});



// Question 4
let queYes4= document.getElementById("que_yes4");

let queNo4= document.getElementById("que_no4");

queYes4.addEventListener("click", function(){
    score += 1;
});



// Question 5
let queEqui5 = document.getElementById("que_equi5");

let queIsos5 = document.getElementById("que_isos5");

let queBoth5 = document.getElementById("que_both5");

queIsos5.addEventListener("click", function(){
    score += 1;
});



// Question 6
let queYes6= document.getElementById("que_yes6");

let queNo6= document.getElementById("que_no6");

queNo6.addEventListener("click", function(){
    score += 1;
});


// Question 7
let queYes7= document.getElementById("que_yes7");

let queNo7= document.getElementById("que_no7");

queYes7.addEventListener("click", function(){
    score += 1;
});


// Question 8
let que15cm = document.getElementById("que_15cm");

let que45cm = document.getElementById("que_45cm");

let que5cm = document.getElementById("que_5cm");

que5cm.addEventListener("click", function(){
    score += 1;
});


// Question 9
let queEqui9 = document.getElementById("que_equi9");

let queIsos9 = document.getElementById("que_isos9");

let queScalene9 = document.getElementById("que_scalene9");


queScalene9.addEventListener("click", function(){
    score += 1;
});


// Question 10
let que25cm = document.getElementById("que_25cm");

let que30cm = document.getElementById("que_30cm");

let que20cm = document.getElementById("que_20cm");


que30cm.addEventListener("click", function(){
    score += 1;
});




submitBtn.addEventListener("click", function(){
    output.innerHTML = "Your Score : " + score;
    
});