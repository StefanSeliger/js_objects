console.log("test")

// Objects 
// Ein Auto ist bspw. ein Object
/* 
car
brand = Fiat
model = 500
weight = 1ton
color = blue
*/

// key: value
// name: value 
// property: property value

const car = {
    brand: "Fiat",
    model: 500,
    weight: "1ton",
    color: "blue",
    seats: ["leather", "sport"]
}

console.log(car)

// alle Objekte haben Properties, aber die values variieren von Objekt zu Objekt

// Objekte sind Variablen, die mehrere Values haben können

// Accessing Object Properties - Wie greift man auf values zu?
car.model
console.log(car.model)
console.log(car.seats[1])

// Reassignment of Object Properties
car.brand = "BMW"
console.log(car)
console.log(car.brand)

// Assignment of Object Properties - Neues key-value-paar hinzufügen
car.price = "1000 Euro"
console.log(car.price)
console.log(car)

// Object Properties löschen
delete car.model
console.log(car.model)
console.log(car)




// BREAK

// Array and Objects?
const numbers = [1,2,3,4]
console.log(typeof(numbers))
// -> Arrays sind also auch Objects




// Object Methods - Methoden sind in Properties als Funktion gespeichert 
const person = {
    firstName: "Stanni",
    lastName: "Kleemann", 
    id: 12345, 
    street: "Musterstraße 6",
    zipCode: "12345",
    city: "Berlin",
    adress: () => {
        // zuerst zeigen
        console.log(person.street, person.zipCode, person.city)
        // oben auskommentieren, dann das zeigen
        // return person.street + " " + person.zipCode + " " + person.city
        
    },

    // The THIS keyword - this bezieht sich auf den Owner einer function. Hier im Beispiel ist THIS das person Object und bezieht sich darauf - person owned die fullName Function
    fullName: function() {
        console.log(this.firstName + " " + this.lastName)
    },


    // Christian fragen warum Arrow Function und return nicht geht. Kommt immer undefined raus

    // erst wenn oben return einkommentiert ist
    fullAdress() {
        console.log(this.firstName + " " + this.lastName + " " + this.adress())
    }
    
}
person.adress()
person.fullName()


// wenn oben der return einkommentiert ist 
// person.fullAdress()

// geht nicht - undefined console.log(person.fullName())





// Object Loops 
const house = {
    windows: true,
    door: "green",
    rooms: 7
}

for (let i in house) {
    // greift auf die keys zu
    //console.log(i)

    // greift auf die values zu
    // console.log(house[i])

    // greift auf beides zu
    console.log(i, house[i])
}


const noten = {
    javascript: 2.5,
    html: 1,
    css: 1.5,
    scss: 2,
}
// console.log(noten)
// summe bilden: 
let sum = 0
for (let i in noten) {
    sum += noten[i]
    // console.log(noten[i])
}
console.log(sum)


















