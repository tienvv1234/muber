const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PointSchema = new Schema({
    type: {
        type: String,
        default: ['Point'],
    },
    coordinates: {
        type: [Number],
        index: '2dsphere', // create the geospatial index for the coordinates field in the database (for the 2dsphere index, see https://docs.mongodb.com/manual/reference/operator/2d/#geospatial-indexes)
    }
});

const DriverSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    driving: {
        type: Boolean,
        required: true,
    },
    geometry: PointSchema,
});

const Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;