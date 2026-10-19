StartOne = { 
    validate: function one(key , index) {
    if (key == "ArrowLeft") {
        setStartCaret(index - 2);
        goodInput;
    }
    else if (key == "ArrowRight") {
        setStartCaret(index);
        goodInput;
    }
    // end of snippet
    else if (z0Arr.includes(key)) {
        console.log("good input!");
        // set value to pressed key
        startValArr[0] = key;
        // if value is 2, then next get zero'd out if not 0, 1, 2, or 3.
        if (key == '2' && (!(zTArr.includes(startValArr[1])))) {
            startValArr[1] = '0';
        }
        //set input box value, rinse and repeat
        setStartValue();
        setStartCaret(index);
    }
    //anything else, do nothing.
    else {
        console.log("error :(");
    }
}
}