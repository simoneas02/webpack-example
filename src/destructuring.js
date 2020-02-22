console.log('Destructuring')

const person = {
  name: 'Simone',
  age: 39,
  location: {
    city: 'Recife',
    temp: 40
  }
}

// console.log(`${person.name} is ${person.age}.`)

// const name = person.name
// const age = person.age
// console.log(`${name} is ${age}.`)

const { name: firstName = 'Karla', age, surname = 'Amorim' } = person
console.log(`${firstName} ${surname} is ${age}.`)

// if (person.location.temp && person.location.city) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}.`)
// }

// const { temp, city } = person.location
// if (temp && city) {
//   console.log(`It's ${temp} in ${city}.`)
// }

const { temp: temperature, city } = person.location

if (temperature && city) {
  console.log(`It's ${temperature} in ${city}.`)
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    //   name: 'Pinguim'
  }
}

const { name: publisherName = 'Self-publisher' } = book.publisher

console.log(`${publisherName}`)

const adress = ['Av. dantas barreto', 114, 'Recife', 'PE']

// console.log(`You're in ${adress[2]} ${adress[3]}`)

// const myCity = adress[2]
// const state = adress[3]
// console.log(`You're in ${myCity} ${state}`)

// const [street, number, myCity, state] = adress
// console.log(`You're in ${myCity} ${state}`)

const [, , myCity, state = 'No state'] = adress
console.log(`You're in ${myCity} ${state}`)
