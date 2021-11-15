let someObject = {
    propertyOne: "abc",
    propertyTwo: 2,
    functionOne: function(x,y) {return x * y},
    functionTwo: function(x,y) {return x + y}
    
}

function printInfo(someObject) {
    console.log("object's first property : \" " + someObject.propertyOne + " \", and it's type : "+ typeof(someObject.propertyOne));
    console.log("object's second property : \" " + someObject.propertyTwo + " \", and it's type : " + typeof(someObject.propertyTwo));
}

printInfo(someObject);
console.log(someObject.functionOne(1,2));
console.log(someObject.functionTwo(1,2));