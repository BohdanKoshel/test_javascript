let btn = document.getElementById("button");
let button = document.querySelector(".btn2");
let clickCount = 0;


btn.addEventListener("click", function () {
        clickCount = clickCount + 1;
        if (clickCount >= 5) {
            btn.textContent = "лимит!";
            btn.style.backgroundColor = "red";
            console.log("лимит достигнут");
        }
        else {
            btn.style.backgroundColor = "";
            btn.textContent = "Нажато: " + clickCount;
        }
});

button.addEventListener("click", function(){    
    button.style.border = "3px solid black";
    button.classList.toggle("damn");
    button.textContent = "кликнуто!";
})

function checkNumber(number) {
    if (number % 2 === 0 ) {
           sayEven();
        }
        else {
          sayOdd();  
        }
        function sayOdd() {
            console.log("число не четное");
        };
         function sayEven() {
                console.log("число четное");
            };
    };

checkNumber(15);
checkNumber(174);
checkNumber(7396324983);

let numberButton = document.getElementById("numberButton");

function writeEven(){
    console.log("на кнопке нечетное число");
};
function writeOdd(){
    console.log("на кнопке четное число");
}

numberButton.addEventListener("click", function checkif(){
    if (numberButton.textContent % 2 === 0){
       writeOdd(); 
    }
    else {
        writeEven();
    }
});

let agep = document.getElementById("ageInput");
let btn4 = document.getElementById("submit");


btn4.addEventListener("click", function(){
    let age = Number(agep.value);
   if (agep.value === ""){
       console.log("введите возраст");
   } 
   else if(age < 0) {
    console.log("возраст не может быть отрицательным");
   }
   else if (age >= 0 && age <= 17){
    console.log("ты несовершеннолетний");
   }
   else if (age >= 18){
    console.log("ты совершеннолетний");
   }
});

function jwfpj(x){
    return (x * x);
}

let result = jwfpj(2);
    console.log(result + 10);
