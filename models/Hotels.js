const mongoose = require("mongoose")
const AddressSchema = new mongoose.Schema({
    Country: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Street: {
        type: String,
        required: true
    }
});
const FacilitiesSchema = new mongoose.Schema({
    MostPopularFacilities: {
        type: [String],
        required: true
    },
    MoreFacilities: {
        type: Object,
        required: true
    }
});
const HotelInfoSchema = new mongoose.Schema({
    HotelPhoneNum: {
        type: [Number],
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Fax: {
        type: String,
        required: true
    }
})


const hotelsSchema = mongoose.Schema({
    CityId: {
        type: mongoose.SchemaTypes.ObjectId, ref: ''
    },
    Name: {
        type: String,
        required: false,
    },
    location: {
        type: [Number],
        required: true
    },
    Address: {
        type: AddressSchema,
        required: true
    },
    Facilities: {
        type: FacilitiesSchema,
        required: true
    },
    SSRoomPrice: {
        type: Number,
        required: true
    },
    Availability: {
        type: Boolean,
        required: true
    },
    HotelDescription: {
        type: String,
        required: true
    },
    HotelImg: {
        type: String,
        required: true
    },
    HotelImages: {
        type: [String],
        required: true
    },
    HotelInfo: {
        type: HotelInfoSchema,
        required: true
    },

})
var hotelsModel = mongoose.model('Hotels', hotelsSchema)
module.exports = hotelsModel