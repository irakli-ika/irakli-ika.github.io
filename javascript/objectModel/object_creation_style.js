
// TODO =>  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

Object.prototype.alertMessage = () => {
    return 'Welcome'
}

Array.prototype.getData = () => {
    return 'data From Aarray new Method'
}


// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);

fish.type = 'Fishes';
fish.displayType(); // Output:Fishes

console.log( `OBJ -> ${fish.alertMessage()}` )

const arr = [1, 2, 3]

console.log( `ARRAY -> ${arr.alertMessage()}` )

console.log(arr.getData())
// console.log(fish.getData())
