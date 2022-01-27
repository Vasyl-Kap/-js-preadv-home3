function CoffeeMake() {}

CoffeeMake.prototype.on = function(){
    console.log('Coffee make mode is ON!');
}

CoffeeMake.prototype.off = function(){
    console.log('Ooops, coffee make mode is OFF!');
}

let coffeeMake = new CoffeeMake();

// --- Drip Coffee Maker ---  //

function DripMaker() {
   this.coffeeType = 'Ground coffee';
}

DripMaker.prototype = Object.create(CoffeeMake.prototype);
DripMaker.prototype.constructor = CoffeeMake;

DripMaker.prototype.start = function() {
    console.log('Please, wait. Coffee is brewing!');
}
DripMaker.prototype.finish = function() {
    console.log('Coffee making is complete!');
}

let drip = new DripMaker();

// --- Carob Coffee Maker ---  //

function CarobMaker() {
    this.coffeeType = 'Ground coffee, or chaldi';
}

CarobMaker.prototype = Object.create(CoffeeMake.prototype);
CarobMaker.prototype.constructor = CoffeeMake;

CarobMaker.prototype.auto_power_off = function() {
    console.log('The coffee maker will switch off automatically after 30 minutes!');
}

let carob = new CarobMaker();

// --- Coffee Machine ---  //

function CoffeeMachine() {
    this.coffeeType = 'Coffee beans';
}

CoffeeMachine.prototype = Object.create(CoffeeMake.prototype);
CoffeeMachine.prototype.constructor = CoffeeMake;

CoffeeMachine.prototype.cappuccino_mode = function() {
    console.log('Start cappuccino cooking automatically');
}

let machine = new CoffeeMachine();
