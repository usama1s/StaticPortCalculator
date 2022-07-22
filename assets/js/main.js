var inputlength = document.querySelectorAll(".position_data").length;
// console.log(inputlength);
for (var i = 0; i < inputlength; i++) {
  document.querySelectorAll(".position_data")[i].addEventListener('input', function(event) {
    // alert("Fdsa");
    inp1 = document.querySelector("#inp1").value;
    inp2 = document.querySelector("#inp2").value;
    inp3 = document.querySelector("#inp3").value;
    inp4 = document.querySelector("#inp4").value;
    inp5 = document.querySelector("#inp5").value;
    inp6 = document.querySelector("#inp6").value;
    inp7 = document.querySelector("#inp7").value;
    inp8 = document.querySelector("#inp8").value;
    inp9 = document.querySelector("#inp9").value;

    if (inp1>=1) {
      document.querySelector("#inp1").style.color = "red";
    }else{
      document.querySelector("#inp1").style.color = "black";
    }
    if (inp2>=1) {
      document.querySelector("#inp2").style.color = "red";
    }else{
      document.querySelector("#inp2").style.color = "black";
    }
    if (inp3>=1) {
      document.querySelector("#inp3").style.color = "red";
    }else{
      document.querySelector("#inp3").style.color = "black";
    }
    if (inp4>=1) {
      document.querySelector("#inp4").style.color = "red";
    }else{
      document.querySelector("#inp4").style.color = "black";
    }
    if (inp5>=1) {
      document.querySelector("#inp5").style.color = "red";
    }else{
      document.querySelector("#inp5").style.color = "black";
    }
    if (inp6>=1) {
      document.querySelector("#inp6").style.color = "red";
    }else{
      document.querySelector("#inp6").style.color = "black";
    }
    if (inp7>=1) {
      document.querySelector("#inp7").style.color = "red";
    }else{
      document.querySelector("#inp7").style.color = "black";
    }
    if (inp8>=1) {
      document.querySelector("#inp8").style.color = "red";
    }else{
      document.querySelector("#inp8").style.color = "black";
    }
    if (inp9>=1) {
      document.querySelector("#inp9").style.color = "red";
    }else{
      document.querySelector("#inp9").style.color = "black";
    }

    groupA = (((eval(inp2) + eval(inp5))/2) - ((eval(inp3) + eval(inp4)) / 2)).toFixed(2);
    groupB = (((eval(inp5) + eval(inp8))/2) - ((eval(inp6) + eval(inp7)) / 2)).toFixed(2);
    groupC = (((eval(inp1) + eval(inp7))/2) - ((eval(inp3) + eval(inp4)) / 2)).toFixed(1);
    groupD = (((eval(inp3) + eval(inp9))/2) - ((eval(inp6) + eval(inp7)) / 2)).toFixed(1);
   

    if (groupA >= -0.25 && groupA <= 0.25) {
      document.querySelector("#groupA span").style.color = "green";
    } else {
      document.querySelector("#groupA span").style.color = "red";
    }
    if (groupA != "NaN") {
      document.querySelector("#groupA span").innerHTML = groupA;
    }


    if (groupB >= -0.25 && groupB <= 0.25) {
      document.querySelector("#groupB span").style.color = "green";
    } else {
      document.querySelector("#groupB span").style.color = "red";
    }
    if (groupB != "NaN") {
      document.querySelector("#groupB span").innerHTML = groupB;
    }

    if (groupC >= -0.5 && groupC <= 0.5) {
      document.querySelector("#groupC span").style.color = "green";
    } else {
      document.querySelector("#groupC span").style.color = "red";
    }
    if (groupC != "NaN") {
      document.querySelector("#groupC span").innerHTML = groupC;
    }

    if (groupD >= -0.5 && groupD <= 0.5) {
      document.querySelector("#groupD span").style.color = "green";
    } else {
      document.querySelector("#groupD span").style.color = "red";
    }
    if (groupD != "NaN") {
      document.querySelector("#groupD span").innerHTML = groupD;
    }

  });
}

function reset() {
  document.querySelector("#inp1").value = "";
  document.querySelector("#inp2").value = "";
  document.querySelector("#inp3").value = "";
  document.querySelector("#inp4").value = "";
  document.querySelector("#inp5").value = "";
  document.querySelector("#inp6").value = "";
  document.querySelector("#inp7").value = "";
  document.querySelector("#inp8").value = "";
  document.querySelector("#inp9").value = "";
  document.querySelector("#groupA span").style.color = "black";
  document.querySelector("#groupB span").style.color = "black";
  document.querySelector("#groupC span").style.color = "black";
  document.querySelector("#groupD span").style.color = "black";

  document.querySelector("#groupA span").innerHTML = "";
  document.querySelector("#groupB span").innerHTML = "";
  document.querySelector("#groupC span").innerHTML = "";
  document.querySelector("#groupD span").innerHTML = "";
  
}
window.addEventListener('resize', function(event) {
  updateEngineSize()
});
updateEngineSize();

function updateEngineSize() {
  console.log(window.innerWidth >= window.innerHeight);
  // console.log(window.innerHeight);
  if (window.innerWidth >= window.innerHeight) {
    document.querySelector("body").classList.add("landscapeScreen");
    document.querySelector("body").classList.remove("portraitScreen");
  } else {
    document.querySelector("body").classList.add("portraitScreen");
    document.querySelector("body").classList.remove("landscapeScreen");
  }
}
