import "../style/style.scss";

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  let height = document.querySelector("#input-H").value;
  let weight = document.querySelector("#input-W").value;
  let age = document.querySelector("#age").value;

  if (window == "" || height == "" || age == "") {
    alert("complete your information");
    return;
  }

  height = height / 100;
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);
  document.querySelector("#result").innerHTML = bmi;

  let status = "";

  if (bmi < 18.5) {
    status = "Underweight";

  }else if (18.5<= bmi && bmi <=24.9){
    status = "Healthy";
  }else if (25<= bmi && bmi <=29.9){
    status ="Overweight"
  }else if (30<=bmi && bmi <=34.9){
    status = "Obese"
  }else if(35<=bmi){
    status = "Extremely obese"
  }


  document.querySelector(
    ".comment"
  ).innerHTML = `  <span id="comment">${status}</span>
  `;
});
