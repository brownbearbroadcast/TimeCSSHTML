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
        if (topTimecode.frame_count > bottomTimecode.frame_count) {
        alert("Start timecode must be less than or equal to end timecode.");
        return;
    }
    console.log("hello there");
    var resultant = topTimecode.duration(topTimecode, bottomTimecode);
    }
    if (flag == "Add"){
    var resultant = topTimecode.add(bottomTimecode);
    }
    if (flag == "Subtract"){
      if (topTimecode.frame_count < bottomTimecode.frame_count) {
        alert("Minuend (bottom) timecode must be less than or equal to original timecode.");
        return;
      }
      topTimecode.subtract(bottomTimecode);
      var resultant = topTimecode;
    }
    console.log(resultant);
    document.getElementById("result").innerHTML = resultant.string(new Intl.NumberFormat('en-US', {  minimumIntegerDigits: 2 }));
}