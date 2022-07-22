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

    groupA = (((eval(inp2) + eval(inp5))/2) - ((eval(inp3) + eval(inp4)) / 2)).toFixed(3);
    groupB = (((eval(inp1) + eval(inp6))/2) - ((eval(inp3) + eval(inp4)) / 2)).toFixed(3);
 
   

    if (groupA >= -0.25 && groupA <= 0.25) {
      document.querySelector("#groupA span").style.color = "green";
    } else {
      document.querySelector("#groupA span").style.color = "red";
    }
    if (groupA != "NaN") {
      document.querySelector("#groupA span").innerHTML = groupA;
    }


    if (groupB >= -0.5 && groupB <= 0.5) {
      document.querySelector("#groupB span").style.color = "green";
    } else {
      document.querySelector("#groupB span").style.color = "red";
    }
    if (groupB != "NaN") {
      document.querySelector("#groupB span").innerHTML = groupB;
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

  document.querySelector("#groupA span").style.color = "black";
  document.querySelector("#groupB span").style.color = "black";
 

  document.querySelector("#groupA span").innerHTML = "";
  document.querySelector("#groupB span").innerHTML = "";

  
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
