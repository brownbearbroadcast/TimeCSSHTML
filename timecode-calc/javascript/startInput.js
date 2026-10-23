    //obfuscation so the code is not 10 miles long
    //sets start input box value from array
    function setStartValue() {
      $("#start").val(startValArr.join(""));
    }
    //this is a janky solution but I never claimed to be a front-end engineer
    let startValArr = ['0', '0', ':', '0', '0', ':', '0', '0', ';', '0', '0'];
    if (document.getElementById("start").value != "00:00:00;00") {
      startValArr = document.getElementById("start").value.split("");
    }
    //lazyness
    function goodInput() {
      console.log("good input! :)");
    }
    function badInput() {
      console.log("bad input! :(");
    }
    //by default, caret goes to right. to keep same, insert index - 1.
    function setStartCaret(index) {
      document.getElementById("start").setSelectionRange(index + 1, index + 1);
    }

    //this can probs be 1 equation via obfuscation but just trying to make work right now.

    document.getElementById("start").addEventListener("keydown", e => {
      console.log("Carat at: ", e.target.selectionStart);
      const index = e.target.selectionStart;
      // arrays that define acceptable number inputs for differnt slots
      //for the first hour mark & second mark, can only be 0, 1, or 2
      const zOArr = ['0', '1', '2'];
      // for the second hour mark, if first is 2, can only be 0, 1, 2, or 3
      const zTArr = ['0', '1', '2', '3'];
      // for the minutes & seconds, first digit can only be 0-5
      const zFArr = ['0', '1', '2', '3', '4', '5'];
      //for the others, can be 0-9
      const numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      // drop frame invalid 00/01
      const dFArr = ['0' , '1'];
      // input validation for all 11 chars #sobbing-and/or-crying
      switch (index) {
        case 0:
          e.preventDefault();
          // adding to every case so that arrow keys work
          if (e.key == "ArrowLeft") {
            setStartCaret(index - 2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight") {
            setStartCaret(index);
            goodInput;
            break;
          }
          // end of snippet
          if (zOArr.includes(e.key)) {
            console.log("good input!");
            // set value to pressed key
            startValArr[0] = e.key;
            // if value is 2, then next get zero'd out if not 0, 1, 2, or 3.
            if (e.key == '2' && (!(zTArr.includes(startValArr[1])))) {
              startValArr[1] = '0';
            }
            //set input box value, rinse and repeat
            setStartValue();
            setStartCaret(index);
            break;
          }
          //anything else, do nothing.
          else {
            console.log("error :(");
            break;
          }


        case 1:
          e.preventDefault();
          if (e.key == "ArrowLeft") {
            setStartCaret(index - 2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight") {
            setStartCaret(index + 1);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            startValArr[0] = '0';
            setStartValue();
            goodInput();
            setStartCaret(index - 2);
            break;
          }
          if (startValArr[0] == '2') {
            if (zTArr.includes(e.key)) {
              startValArr[1] = e.key;
              setStartValue();
              goodInput();
              setStartCaret(index + 1);
              break;
            }
            else {
              console.log("bad input! zTarr fail :(");
              break;
            }
          }
          if (numArr.includes(e.key)) {
            startValArr[1] = e.key;
            setStartValue();
            goodInput();
            setStartCaret(index + 1);
            break;
          }
          console.log("bad input! :(");
          break;


        case 2:
          e.preventDefault();
          if (e.key == "ArrowLeft") {
            setStartCaret(index - 2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight") {
            setStartCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            startValArr[1] = '0';
            setStartValue();
            goodInput();
            setStartCaret(index - 2);
            break;
          }
          if (zFArr.includes(e.key)) {
            startValArr[3] = e.key;
            setStartValue();
            goodInput();
            setStartCaret(index);
            break;
          }
          badInput();
          break;


        case 3:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setStartCaret(index-3);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setStartCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            startValArr[1] = '0';
            setStartValue();
            goodInput();
            setStartCaret(index - 3);
            break;
          }
          if (zFArr.includes(e.key)) {
            startValArr[3] = e.key;
            setStartValue();
            goodInput();
            setStartCaret(index);
            break;
          }
          badInput();
          break;


        case 4:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setStartCaret(index - 3);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setStartCaret(index + 1);
            goodInput;
            break;
          }          
          if (e.key == "Backspace") {
            startValArr[3] = '0';
            setStartValue();
            goodInput();
            setStartCaret(index - 2);
            break;
          }          
          if (numArr.includes(e.key)){
            startValArr[4] = e.key;
            setStartValue();
            goodInput();
            setStartCaret(index + 1);
            break;
          }
          badInput();
          break;


        case 5:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setStartCaret(index-2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setStartCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            startValArr[4] = '0';
            setStartValue();
            goodInput();
            setStartCaret(index - 2);
            break;
          }
          if (zFArr.includes(e.key)){
            startValArr[6] = e.key;
            setStartValue();
            goodInput();
            setStartCaret(index + 1);
          }          
          badInput();
          break;


        case 6:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setStartCaret(index-3);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setStartCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            startValArr[4] = '0';
            setStartValue();
            goodInput();
            setStartCaret(index - 3);
            break;
          }          
          if (zFArr.includes(e.key)){
            startValArr[6] = e.key;
            setStartValue()
            goodInput()
            setStartCaret(index);
          }
          badInput();
          break;


        case 7:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setStartCaret(index-3);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setStartCaret(index + 1);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            startValArr[6] = '0';
            setStartValue();
            goodInput();
            setStartCaret(index - 2);
            break;
          }          
          if(numArr.includes(e.key)){
            if(e.key != '0' && startValArr[9] == '0' && dFArr.includes(startValArr[10])){
              startValArr[10] = '0';
            }
            startValArr[7] = e.key;
            setStartValue();
            goodInput();
            setStartCaret(index + 1);
          }
          badInput();
          break;


        case 8:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setStartCaret(index-2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setStartCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            startValArr[7] = '0';
            setStartValue();
            goodInput();
            setStartCaret(index - 2);
            break;
          }
          if (zOArr.includes(e.key)){
            startValArr[9] = e.key;
            setStartValue();
            goodInput();
            setStartCaret(index + 1);
          }
          badInput();
          break;


        case 9:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setStartCaret(index-2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setStartCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            startValArr[7] = '0';
            setStartValue();
            goodInput();
            setStartCaret(index - 3);
            break;
          }
          if (zOArr.includes(e.key)){
            startValArr[9] = e.key;
            setStartValue();
            goodInput();
            setStartCaret(index);
          }          
          badInput();
          break;


        case 10:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setStartCaret(index-3);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setStartCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            startValArr[9] = '0';
            setStartValue();
            goodInput();
            setStartCaret(index - 2);
            break;
          }
          if (startValArr[7] != 0 && startValArr[9] == 0){
            if (!(dFArr.includes(e.key))){
              startValArr[10] = e.key;
              setStartValue();
              goodInput();
              setStartCaret(index);
              break;
            }
            else{
              badInput();
              break;
            }
          }  
          else if (numArr.includes(e.key)){
            startValArr[10] = e.key;
            setStartValue();
            goodInput();
            setStartCaret(index);
            break;
          } 
            badInput();
            break;

          
        case 11:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setStartCaret(index-2);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            startValArr[10] = '0';
            setStartValue();
            goodInput();
            setStartCaret(index - 2);
            break;
          }          
          //TODO case 11
          break;

      }

    }
    )

    console.log(Number("01"));