                       // 🚀 Day 15 Challenge: Start Coding! 🚀//
//Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function 
//make_great() with a copy of the array of magicians’ names. Because the original 
//array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original 
//names and one array with the Great added to each magician’s name.
function make_great(magicians: string[]): string[] {
    // Make a copy of the array
    const greatMagicians = [...magicians];
    // Add "the Great" to each magician's name
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += " the Great";}
    return greatMagicians;
}
function show_magician(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magiciansOriginal: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const greatMagicians: string[] = make_great([...magiciansOriginal]);
console.log("Original Magicians:");
show_magician(magiciansOriginal);
console.log("\nGreat Magicians:");
show_magician(greatMagicians);

//Q44: Sandwiches: Write a function that accepts a array of items a person wants on a
//sandwich. The function should have one parameter that collects as many items as
//the function call provides, and it should print a summary of the sandwich that 
//is being ordered. Call the function three times, using a different number of 
//arguments each time.

function make_sandwich(...item: string[]) {
    console.log(`Making a sandwich with: ${item.join( )}.`);   
    }
    make_sandwich("chicken", "capsicum","cheese")
    make_sandwich("deli meat", "lettuce", "tomato")
    make_sandwich("mayonnaise", "mustard", "Olives", "Avocado")
    
    
    /// Task # 45 ///
    //Cars: Write a function that stores information about a car in a Object. The function should always receive 
    //a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the 
    //function with the required information and two other name-value pairs, such as a color or an optional feature. 
    //Print the Object that’s returned to make sure all the information was stored correctly.
    
    type car = {
        manufacture: string
        model: string
        [key: string ]: any;
    }
    function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
    return{
        manufacture,
        model,
        ...optional
    }
    }
    const mycar: car = createCar ("Honda", "Corolla", {colour: "Black", year: "2024"})
    console.log(mycar)
    
              