console.log("TEST 2022-11-3");
let x = 34;
console.log(typeof(x))

let myString = "my first string";
console.log("type of string ->", typeof(mystring))
console.log("myStrin ->", myString)
console.log("myString ->", myString)

let myStringDoubleApo = "my \"first string\"";
console.log("myStringDoubleApo ->", myStringDoubleApo)

let myStringBSlash= "my \\ \"first string\"";
console.log("myStringBSlash ->", myStringBSlash)

let myStringNLine = "my \n \"first string\"";
console.log("myStringNLine ->", myStringNLine)
console.log("myStringNLine ->", myStringNLine.lenght)

let myStringOrig = "my first string";
let myStringOrigSliced = "my fist string".slice(3, 6);
console.log("myStringOrig -- myStringOrigSliced ->", myStringOrig, "--", myStringOrigSliced)

let myStringOrigSlicedTwo = "myStringOrigSlicedTwo".slice(3);
console.log("myStringOrigSlicedTwo ->", myStringOrigSlicedTwo)

let myStringOrigSlicedThree = "my first string".slice(-3)
console.log("myStringOrigSlicedThree ->", myStringOrigSlicedThree)

let strCharAt = "Test"
console.log(strCharAt, strCharAt.charAt(2, 1))
