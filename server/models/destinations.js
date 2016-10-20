// app/models/user.js
// load the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// define the schema for our user model
var destinationSchema = mongoose.Schema({
    title: String,
    organizer: String,
    gallery: String,
    details: [{
        location: String,
        description:String,
        start:Date,
        end:Date,
        include:String,
        exclude:String,
        activities:String
    }],
    rating:Number,
    comment:[{
      details:String
    }],
    price:Number
}, {
    timestamps: true
});


// create the model for users and expose it to our app
module.exports = mongoose.model('destinations', destinationSchema); // nama collection
