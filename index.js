// Ques # 34
var pizzas = ['Pepproni', 'Range', 'creamy tikka'];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log('I really love pizza!');
// Ques # 35 
var animals = ['Dog', 'Cat', 'Parrot'];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log('Any of these animals would make a great pet!');
// Ques # 36
function shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message '").concat(message, "' printed on it."));
}
shirt('medium', 'I love mama');
