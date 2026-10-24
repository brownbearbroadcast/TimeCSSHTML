function flagSubmit(){
    const flag = document.getElementById("operation").value;
    let end = document.getElementById("end").value;
    let start = document.getElementById("start").value;
    let topTimecode = new DropFrame(Number(start.slice(9,11)), Number(start.slice(6,8)), Number(start.slice(3,5)), Number(start.slice(0,2)));
    topTimecode.display();
    let bottomTimecode = new DropFrame(Number(end.slice(9,11)), Number(end.slice(6,8)), Number(end.slice(3,5)), Number(end.slice(0,2)));
    bottomTimecode.display();
    console.log(flag);
  
       if (flag == "Duration"){
    if (topTimecode.duration(topTimecode, bottomTimecode) == undefined) {
        return;
    }
    var resultant = topTimecode.duration(topTimecode, bottomTimecode);
    console.log(resultant);
    document.getElementById("result").innerHTML = "Duration: " + resultant.string();
  }
    if (flag == "Addition"){
    var resultant = topTimecode.add(bottomTimecode);
    console.log(resultant);
    document.getElementById("result").innerHTML = "Result: " + resultant.string();    
  }
    if (flag == "Subtraction"){
      if (topTimecode.subtract(bottomTimecode) == undefined) {
        return;
      }
      var resultant = topTimecode.subtract(bottomTimecode);
      console.log(resultant);
      document.getElementById("result").innerHTML = "Result: " + resultant.string();
    }
}