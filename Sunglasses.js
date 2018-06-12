const mongoose = require('../db/init')
const Schema = mongoose.Schema

const sunglassesSchema = new Schema({
    frameStyle: String,
    colour: String,
    lensTint: String,
    material: String,
    size: String,
    price: Number
})



sunglassesSchema.methods.findColour = function(colour) {
    return this.model('Sunglasses').find({ colour: colour })
}

const sunglassesModel = mongoose.model('Sunglasses', sunglassesSchema)

module.exports = sunglassesModel
