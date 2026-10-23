    //obfuscation so the code is not 10 miles long
    //sets end input box value from array
   
    function setEndValue() {
      $("#end").val(endValArr.join(""));
    }
    let endValArr = ['0', '0', ':', '0', '0', ':', '0', '0', ';', '0', '0'];
    //this is a janky solution but I never claimed to be a front-end engineer
    if (document.getElementById("end").value != "00:00:00;00") {
      endValArr = document.getElementById("end").value.split("");
    }
    //lazyness
    function goodInput() {
      console.log("good input! :)");
    }
    function badInput() {
      console.log("bad input! :(");
    }
    //by default, caret goes to right. to keep same, insert index - 1.
    function setEndCaret(index) {
      document.getElementById("end").setSelectionRange(index + 1, index + 1);
    }
    //this can probs be 1 equation via obfuscation but just trying to make work right now.

    document.getElementById("end").addEventListener("keydown", e => {
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
          if (e.key == "ArrowRight") {
            setEndCaret(index);
            goodInput;
            break;
          }
          if (zOArr.includes(e.key)) {
            console.log("good input!");
            // set value to pressed key
            endValArr[0] = e.key;
            // if value is 2, then next get zero'd out if not 0, 1, 2, or 3.
            if (e.key == '2' && (!(zTArr.includes(endValArr[1])))) {
              endValArr[1] = '0';
            }
            //set input box value, rinse and repeat
            setEndValue();
            setEndCaret(index);
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
            setEndCaret(index - 2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight") {
            setEndCaret(index + 1);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            endValArr[0] = '0';
            setEndValue();
            goodInput();
            setEndCaret(index - 2);
            break;
          }
          if (endValArr[0] == '2') {
            if (zTArr.includes(e.key)) {
              endValArr[1] = e.key;
              setEndValue();
              goodInput();
              setEndCaret(index + 1);
              break;
            }
            else {
              console.log("bad input! zTarr fail :(");
              break;
            }
          }
          if (numArr.includes(e.key)) {
            endValArr[1] = e.key;
            setEndValue();
            goodInput();
            setEndCaret(index + 1);
            break;
          }
          console.log("bad input! :(");
          break;


        case 2:
          e.preventDefault();
          if (e.key == "ArrowLeft") {
            setEndCaret(index - 2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight") {
            setEndCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            endValArr[1] = '0';
            setEndValue();
            goodInput();
            setEndCaret(index - 2);
            break;
          }
          if (zFArr.includes(e.key)) {
            endValArr[3] = e.key;
            setEndValue();
            goodInput();
            setEndCaret(index + 1);
            break;
          }
          badInput();
          break;


        case 3:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setEndCaret(index-3);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setEndCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            endValArr[1] = '0';
            setEndValue();
            goodInput();
            setEndCaret(index - 3);
            break;
          }
          if (zFArr.includes(e.key)) {
            endValArr[3] = e.key;
            setEndValue();
            goodInput();
            setEndCaret(index);
            break;
          }
          badInput();
          break;


        case 4:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setEndCaret(index - 2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setEndCaret(index + 1);
            goodInput;
            break;
          }          
          if (e.key == "Backspace") {
            endValArr[3] = '0';
            setEndValue();
            goodInput();
            setEndCaret(index - 3);
            break;
          }          
          if (numArr.includes(e.key)){
            endValArr[4] = e.key;
            setEndValue();
            goodInput();
            setEndCaret(index + 1);
            break;
          }
          badInput();
          break;


        case 5:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setEndCaret(index-2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setEndCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            endValArr[4] = '0';
            setEndValue();
            goodInput();
            setEndCaret(index - 2);
            break;
          }
          if (zFArr.includes(e.key)){
            endValArr[6] = e.key;
            setEndValue();
            goodInput();
            setEndCaret(index + 1);
            break;
          }          
          badInput();
          break;


        case 6:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setEndCaret(index-3);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setEndCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            endValArr[4] = '0';
            setEndValue();
            goodInput();
            setEndCaret(index - 3);
            break;
          }          
          if (zFArr.includes(e.key)){
            endValArr[6] = e.key;
            setEndValue()
            goodInput()
            setEndCaret(index);
            break;
          }
          badInput();
          break;


        case 7:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setEndCaret(index-2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setEndCaret(index + 1);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            endValArr[6] = '0';
            setEndValue();
            goodInput();
            setEndCaret(index - 3);
            break;
          }          
          if(numArr.includes(e.key)){
            if(e.key == '0' && endValArr[4] != '0' && dFArr.includes(endValArr[10])){
              endValArr[10] = '2';
            }
            endValArr[7] = e.key;
            setEndValue();
            goodInput();
            setEndCaret(index + 1);
          }
          break;


        case 8:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setEndCaret(index-2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setEndCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            endValArr[7] = '0';
            setEndValue();
            goodInput();
            setEndCaret(index - 2);
            break;
          }
          if (zOArr.includes(e.key)){
            endValArr[9] = e.key;
            setEndValue();
            goodInput();
            setEndCaret(index + 1);
            break;
          }
          badInput();
          break;


        case 9:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setEndCaret(index-3);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setEndCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            endValArr[7] = '0';
            setEndValue();
            goodInput();
            setEndCaret(index - 3);
            break;
          }
          if (zOArr.includes(e.key)){
            endValArr[9] = e.key;
            setEndValue();
            goodInput();
            setEndCaret(index);
            break;
          }          
          badInput();
          break;


        case 10:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setEndCaret(index-2);
            goodInput;
            break;
          }
          if (e.key == "ArrowRight"){
            setEndCaret(index);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            endValArr[9] = '0';
            setEndValue();
            goodInput();
            setEndCaret(index - 3);
            break;
          }
         if (endValArr[6] == 0 && endValArr[7] == 0 && endValArr[4] != 0){
            if (!(dFArr.includes(e.key))){
              endValArr[10] = e.key;
              setEndValue();
              goodInput();
              setEndCaret(index);
              break;
            }
            else {
              badInput();
              break;
            }
          }  
          if (numArr.includes(e.key)){
            endValArr[10] = e.key;
            setEndValue();
            goodInput();
            setEndCaret(index);
            break;
          } 
            badInput();
            break;

          
        case 11:
          e.preventDefault();
          if (e.key == "ArrowLeft"){
            setEndCaret(index-2);
            goodInput;
            break;
          }
          if (e.key == "Backspace") {
            endValArr[10] = '0';
            setEndValue();
            goodInput();
            setEndCaret(index - 2);
            break;
          }          
          badInput(); //would like to meld into next input maybe
          break;

      }

    }
    )

    console.log("test");