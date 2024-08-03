welcomefun();
function welcomefun(){document.querySelector('.box-js').innerHTML = `
    <h1>BMI Calculator </h1>
    <input class="in1" type="text" placeholder="Enter height">
    <input class="in2" type="text" placeholder="Enter weight">
    <button onclick="calculate();">Calculate</button>
    <p class="result"></p>
`;}

function calculate(){
  let height = document.querySelector('.in1').value;
  let weight = document.querySelector('.in2').value;
  let bmi = (weight) / (height * height);
  document.querySelector('.box-js').innerHTML =`
  <p class="p2">Your BMI is : ${bmi}</p>
  <button class="btn" onclick="welcomefun()">TRY AGAIN</button>
    `;
}

function TryAgain() {
  welcomefun();
}