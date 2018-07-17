const add = (a, b) => {
    return a + b;
};
console.log(add(2,3));

const user = {
    'name':"Nikhil",
    'cities':['Delhi', 'Pune', 'Bangalore', 'Mumbai'],
    printPlacesLived() {
        this.cities.map((city) => console.log(this.name+" lives in "+city+"!"))
    }
};

user.printPlacesLived();

//Challenge
const multiplier = {
    'numbers':[5, 6, 7, 8, 9, 10],
    'multiplyBy':5,
    getProducts() {
        return this.numbers.map((nos) =>console.log(this.multiplyBy * nos))
    }
};
multiplier.getProducts();