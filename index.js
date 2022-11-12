
var number = 4;
document.write("your actually number: ", number);

document.getElementById("myButton").onclick = function() {

    var changeNumber = document.getElementById("myNumber").value;
    
    document.write("the number changed is: ", changeNumber);
}
