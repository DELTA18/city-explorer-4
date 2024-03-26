const mongoose = require('mongoose');

const destinationSchema = mongoose.Schema({
    sr_no: {
        type: Number
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    rating: {
        type: Number
    },
    type: {
        type: String
    },
    img_link: {
        type: String
    }
});

// Specify the collection name explicitly as 'destination'
const destinationModel = mongoose.model('destination', destinationSchema, 'destination');

module.exports = destinationModel;
