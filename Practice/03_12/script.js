/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import DigitalScreen from "./DigitalScreen.js";
import Desk from "./Desk.js";

const gamingScreen = new DigitalScreen("Gaming Screen", 27, 50, 30, 15, true);

const secondScreen = new DigitalScreen("Second Screen", 24, 40, 25, 15, false);

console.log("Gaming Screen:", gamingScreen);
console.log("Before toggling power:", gamingScreen.turnedOn);
gamingScreen.togglePower(false);
console.log("After toggling power:", gamingScreen.turnedOn);

console.log("Second Screen:", secondScreen);
console.log("Before toggling power:", secondScreen.turnedOn);
secondScreen.togglePower(true);
console.log("After toggling power:", secondScreen.turnedOn);

const desk = new Desk("black", 180, 150, 60, gamingScreen, secondScreen);
console.log("Desk:", desk);
