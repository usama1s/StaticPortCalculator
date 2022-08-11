var inputlength = $(".position_data").length;
// console.log(inputlength + "new")
for (var i = 0; i < inputlength; i++) {
    document.querySelectorAll(".position_data")[i].addEventListener('input', function(event) {
    // alert("The text has been changed.");
    inp1 = $("#inp1").val();
    inp2 = $("#inp2").val();
    inp3 = $("#inp3").val();
    inp4 = $("#inp4").val();
    inp5 = $("#inp5").val();
    inp6 = $("#inp6").val();
    inp7 = $("#inp7").val();
    inp8 = $("#inp8").val();
    inp9 = $("#inp9").val();

    if (inp1 == inp9){
        $("#inp1").css("color", "black");  
       $("#inp9").css("color", "black"); 
      }else{
        $("#inp1").css("color", "red");
        $("#inp9").css("color", "red"); 
      }
      groupA = Math.round(parseFloat(((eval(inp2) + eval(inp5))/2) - ((eval(inp3) + eval(inp4))/2 ))*100)/100;
      groupB = Math.round(parseFloat(((eval(inp5) + eval(inp8))/2) - ((eval(inp6) + eval(inp7))/2 ))*100)/100;
      groupC = Math.round(parseFloat(((eval(inp1) + eval(inp7))/2) - ((eval(inp3) + eval(inp4))/2 ))*100)/100;
      groupD = Math.round(parseFloat(((eval(inp3) + eval(inp9))/2) - ((eval(inp6) + eval(inp7))/2 ))*100)/100;


      if (groupA >= -0.25 && groupA <= 0.25) {
        $("#groupA span").css("color", "green");
      } else {
        $("#groupA span").css("color", "red");
      }
      if (groupA != "NaN") {
        $("#groupA span").text(groupA+" mm");
      }
  
  
      if (groupB >= -0.25 && groupB <= 0.25) {
        $("#groupB span").css("color", "green");
      } else {
        $("#groupB span").css("color", "red");
      }
      if (groupB != "NaN") {
        $("#groupB span").text(groupB+" mm");
      }
  
      if (groupC >= -0.5 && groupC <= 0.5) {
        $("#groupC span").css("color", "green");
      } else {
        $("#groupC span").css("color", "red");
      }
      if (groupC != "NaN") {
        $("#groupC span").text(groupC+" mm");
      }
  
      if (groupD >= -0.5 && groupD <= 0.5) {
        $("#groupD span").css("color", "green");
      } else {
        $("#groupD span").css("color", "red");
      }
      if (groupD != "NaN") {
        $("#groupD span").text(groupD+" mm");
      }
  });
}
$("#resetbtn").click(function(){
    $("#inp1").val("");
    $("#inp2").val("");
    $("#inp3").val("");
    $("#inp4").val("");
    $("#inp5").val("");
    $("#inp6").val("");
    $("#inp7").val("");
    $("#inp8").val("");
    $("#inp9").val("");
    $("#groupA span").css("color", "black");
    $("#groupB span").css("color", "black");
    $("#groupC span").css("color", "black");
    $("#groupD span").css("color", "black");
   
    $("#groupA span").text("");
    $("#groupB span").text("");
    $("#groupC span").text("");
    $("#groupD span").text("");
   })



  window.addEventListener('resize', function(event) {
    updateEngineSize()
  });
  updateEngineSize();
  
  function updateEngineSize() {
    // console.log(window.innerWidth >= window.innerHeight);
   
     if (window.innerWidth >= window.innerHeight) {
        $("body").addClass("landscapeScreen");
        $("body").removeClass("portraitScreen");
      } else {
        $("body").addClass("portraitScreen");
        $("body").removeClass("landscapeScreen");
      }
  }