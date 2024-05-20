let form = document.getElementById('submit-form')
let lowerLimit=1;
let upperLimit=4000000;

function intToRoman(num) {
  const symbolsList = [
      ["I", 1],
      ["IV", 4],
      ["V", 5],
      ["IX", 9],
      ["X", 10],
      ["XL", 40],
      ["L", 50],
      ["XC", 90],
      ["C", 100],
      ["CD", 400],
      ["D", 500],
      ["CM", 900],
      ["M", 1000],
      ['V\u0305', 5000],
      ['X\u0305', 10000],
      ['L\u0305', 50000],
      ['C\u0305', 100000],
      ['D\u0305', 500000],
      ['M\u0305', 1000000],
  ];

  let i = symbolsList.length - 1;
  let roman = "";
  while (num > 0) {
      const currentDivider = symbolsList[i][1];
      const currentSymbol = symbolsList[i][0];
      
      const result = Math.floor(num / currentDivider);
      if (result > 0) {
          let temp = "";
          for (let j = 0; j < result; j++) {
              temp += currentSymbol;
          }
          roman += temp;
          num %= currentDivider;
      }
      i -= 1;
  }
  return roman;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let num = document.querySelector('#number');
    let output=document.querySelector('#output')
    let inputValue=num.value;
    if(inputValue==""){
    alert("Please Enter a Roman Value e.g 1, 2, 3 etc.")
    }else if(inputValue>0 && inputValue<=4000000){
    output.textContent=`${inputValue} = ${intToRoman(num.value)}`;
    output.style.setProperty('color','green');
    }else{
    output.textContent=`Kindly enter a value between ${lowerLimit} and ${upperLimit}`;
    output.style.setProperty('color','red');
    }
  });