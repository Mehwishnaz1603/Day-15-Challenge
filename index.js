var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 🚀 Day 15 Challenge: Start Coding! 🚀//
//Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function 
//make_great() with a copy of the array of magicians’ names. Because the original 
//array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original 
//names and one array with the Great added to each magician’s name.
function make_great(magicians) {
    // Make a copy of the array
    var greatMagicians = __spreadArray([], magicians, true);
    // Add "the Great" to each magician's name
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += " the Great";
    }
    return greatMagicians;
}
function show_magician(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var magiciansOriginal = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var greatMagicians = make_great(__spreadArray([], magiciansOriginal, true));
console.log("Original Magicians:");
show_magician(magiciansOriginal);
console.log("\nGreat Magicians:");
show_magician(greatMagicians);
//Q44: Sandwiches: Write a function that accepts a array of items a person wants on a
//sandwich. The function should have one parameter that collects as many items as
//the function call provides, and it should print a summary of the sandwich that 
//is being ordered. Call the function three times, using a different number of 
//arguments each time.
function make_sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(item.join(), "."));
}
make_sandwich("chicken", "capsicum", "cheese");
make_sandwich("deli meat", "lettuce", "tomato");
make_sandwich("mayonnaise", "mustard", "Olives", "Avocado");
function createCar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createCar("Honda", "Corolla", { colour: "Black", year: "2024" });
console.log(mycar);
