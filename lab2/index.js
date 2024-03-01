
const Sizes = {
    SMALL: {
        size: 'small',
        calories: 20,
        price: 50
    },
    LARGE: {
        size: 'large',
        calories: 40,
        price: 100
    }
};

const Stuffings = {
    CHEESE: {
        name: 'Cheese',
        calories: 20,
        price: 10
    },
    SALAD: {
        name: 'Salad',
        calories: 5,
        price: 20
    },
    POTATO: {
        name: 'Potato',
        calories: 10,
        price: 15
    }
};

const Toppings = {
    MAYO: {
        name: 'Mayo',
        calories: 5,
        price: 20
    },
    SPICE: {
        name: 'Spice',
        calories: 0,
        price: 15
    }
};
class Hamburger {
    constructor(size,stuffing) {
        if (!(size in Sizes)) {
            throw new HamburgerException('invalid size: ' + size);
        }

        if (!(stuffing in Stuffings)) {
            throw new HamburgerException("invalid stuffing '" + stuffing + "'");
        }
        this.size = Sizes[size];
        this.stuffing = Stuffings[stuffing];
        this.toppings = [];
    }
    getToppings() {
        return this.toppings.map(t=>t.name)
    }
    addTopping(topping){
        if (this.toppings.includes(topping)) {
            throw new HamburgerException("duplicate topping '" + topping + "'");
        }
        if(!(topping in Toppings)) {
            throw new HamburgerException("It`s not topping : '" + topping + "beaach");
        }
        this.toppings.push(Toppings[topping])
    }
    removeTopping(topping){
        if(!(topping in Toppings)) {
            throw new HamburgerException("It`s not topping : '" + topping + "beaach");
        }
        this.toppings = this.toppings.filter(t => t.name === topping.name)
    }
    getSize(){
        return this.size.size;
    }
    getStuffing(){
        return this.stuffing.name;
    }
    calculatePrice(){
        let sum = 0;
        for (let i = 0; i < this.toppings.length; i++) {
            sum += this.toppings[i].price;
        }
        return sum + this.size.price + this.stuffing.price;
    }

    calculateCalories(){
        let sum = 0;
        for (let i = 0; i < this.toppings.length; i++) {
            sum += this.toppings[i].calories;
        }
        return sum + this.size.calories + this.stuffing.calories;
    }

}
class HamburgerException{
    constructor(message) {
        this.message = message;
    }
}

let hamburger = new Hamburger('SMALL', 'CHEESE')
hamburger.addTopping('MAYO');
hamburger.addTopping('SPICE');
console.log(hamburger.calculatePrice());
console.log(hamburger.getToppings());
hamburger.removeTopping('MAYO')
console.log(hamburger.calculatePrice());
console.log(hamburger.getToppings());
