const Sunglasses = require('../sunglasses/Sunglasses')

// remove any feral cats

// create at 5 cats (remember dob as date and price as integer)
const sunglassesJson = require('./sunglassestable.json')

const sunglasses = sunglassesJson.map(sunglasses => {
    sunglasses.price = parseInt(sunglasses.price, 10)
    return new Sunglasses(sunglasses)
})

// insert many in db

// Cat.remove({})
// .then(()=> {
//     return Cat.insertMany(cats)
// })
// .then(cats => {
//     console.log(`we created some cats`)
//     return Cat.findBreed('Bengal')
// })
// .then(cats => {
//     console.log(`found cats ` + cats)
// })
// .catch(err => console.error(err))

async function seedSunglasses() {
    await Sunglasses.remove({})
    await Sunglasses.insertMany(sunglasses)
    await Sunglasses.findColour('Red')
    console.log('yay fresh mongodb db')
}

seedCats()
.catch(err => console.error(err))
