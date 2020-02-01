//traditional function can access 'this'
//const event = {
//    name: 'Birthday party',
//    printGreeting: function() {
//        console.log('Welcome to ' + this.name)
//    }
//}
//event.printGreeting();

//arrow function cannot access this
//const event = {
//    name: 'Birthday party',
//    printGreeting: () => {
//        console.log('Welcome to ' + this.name)
//    }
//}
//event.printGreeting();

//ES6 function in an object
const event = {
    name: 'Birthday party',
    guestList: ['Nhi', 'Vy', 'Binh'],
    printGreeting() {
        console.log('Welcome to ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}
event.printGreeting();

