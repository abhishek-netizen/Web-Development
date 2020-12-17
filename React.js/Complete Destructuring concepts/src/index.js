import animals,{useAnimals} from "../src/data";

//DESTRUCTURING OF AN ARRAY
const [cat, dog] = animals;
//console.log(cat);
//above code console.log do same as below
var xoxo = animals[0];
//console.log(xoxo)

////DESTRUCTURING OF AN OBJECT
//const { name, sound } = cat;
//console.log(sound);
//RENAMEING THE OBJECTS
//const { name: catName, sound: catSound } = cat;
//console.log(catSound);
//we can also assign different, if name is not there- Go and delete name in data.js and check.
//const {name = "flufy", sound = "catSound"} = cat;
//console.log(name)
//what to do when i have a nested objects??
//const {name,sound,feedingRequirements:{food,water}} = cat;
//const {feedingRequirements:{food,water}} = cat;
//console.log(water)

//HOW SET STATE FUNCTION MAY LOOK LIKE..


const [animal,makeSound] = useAnimals(cat);

console.log(animal)
makeSound()


