document.getElementById("nextBtn").addEventListener("click", function() {
    var currentNumber = parseFloat(document.getElementById("number").value);
    
    if (!isNaN(currentNumber)) {
        var nextNumber = currentNumber + 1;
        document.getElementById("result").innerHTML = "The next number is: " + nextNumber;
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
    }
});