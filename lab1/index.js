function Hamburger(size, stuffing) {
    if (!Sizes.includes(size)) {
        throw new HamburgerException('invalid size: ' + size);
    }

    if (!Stuffings.includes(stuffing)) {
        throw new HamburgerException("invalid stuffing '" + stuffing + "'");
    }
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];

}

const Sizes = [
    Hamburger.SIZE_SMALL = {
        size: 'small',
        calories: 20,
        price: 50
    },
    Hamburger.SIZE_LARGE = {
        size: 'large',
        calories: 40,
        price: 100
    }
]
const Stuffings = [
    Hamburger.STUFFING_CHEESE = {
        name: 'Cheese',
        calories: 20,
        price: 10
    },
    Hamburger.STUFFING_SALAD = {
        name: 'Salad',
        calories: 5,
        price: 20
    },
    Hamburger.STUFFING_POTATO = {
        name: 'Potato',
        calories: 10,
        price: 15
    }
]
const Toppings = [
    Hamburger.TOPPING_MAYO = {
        name: 'Mayo',
        calories: 5,
        price: 20
    },
    Hamburger.TOPPING_SPICE = {
        name: 'Spice',
        calories: 0,
        price: 15
    }
]



Hamburger.prototype.addTopping = function (topping) {
    if (this.toppings.includes(topping)) {
        throw new HamburgerException("duplicate topping '" + topping + "'");
    }
    if(!Toppings.includes(topping)) {
        throw new HamburgerException("It`s not topping : '" + topping + "beaach");
    }
    this.toppings.push(topping)
}
Hamburger.prototype.removeTopping = function (topping) {
    if(!Toppings.includes(topping)) {
        throw new HamburgerException("It`s not topping : '" + topping + "beaach");
    }
   this.toppings = this.toppings.filter(t => t.name === topping.name)
}
Hamburger.prototype.getToppings = function () {
    return this.toppings;
}
Hamburger.prototype.getSize = function () {
    return this.size.size;
}
Hamburger.prototype.getStuffing = function () {
    return this.stuffing.name;
}
Hamburger.prototype.calculatePrice = function () {
    let sum = 0;
    for (let i = 0; i < this.toppings.length; i++) {
        sum += this.toppings[i].price;
    }
    return sum + this.size.price + this.stuffing.price;
}
Hamburger.prototype.calculateCalories = function () {
    let sum = 0;
    for (let i = 0; i < this.toppings.length; i++) {
        sum += this.toppings[i].calories;
    }
    return sum + this.size.calories + this.stuffing.calories;
}
function HamburgerException(message) {
    this.message = message;
    this.name = 'HamburgerException';
}

// маленький гамбургер с начинкой из сыра
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
console.log(hamburger);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log(hamburger);
console.log(hamburger.getSize());
console.log(hamburger.getStuffing());
console.log(hamburger.calculatePrice());
hamburger.removeTopping(Hamburger.TOPPING_MAYO);
var newham = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD);
console.log(newham.getSize());
newham.addTopping(Hamburger.TOPPING_SPICE)
console.log(newham.calculatePrice())
console.log(newham.calculateCalories());
console.log(newham.getToppings())
newham.addTopping(Hamburger.TOPPING_MAYO);
console.log(newham.getToppings())
