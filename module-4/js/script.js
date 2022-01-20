message = "In Global";
console.log ("global message: " + message);



a = function () {
    var message = "inside a";
    console.log ("a:message = " + message);
}

function b () {
    console.log ("b:message = " + message);
};

a();
b();