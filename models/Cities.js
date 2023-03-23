var mongoose = require("mongoose")
var citiesSchema = mongoose.Schema({
    CityName: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    CityImage: {
        type: String,
        required: true
    },
    CityImages: {
        type: [String],
        required: true
    },
    zipIpCode: {
        type: Number,
        required: true
    }
})
var citiesModel = mongoose.model('Cities', citiesSchema)
module.exports = citiesModel