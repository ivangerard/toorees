var Destinations = require('../models/destinations')

module.exports = {
    insert: insert,
    displays: displays,
    displayOne: displayOne,
    update: update,
    deleteitem: deleteitem,
    searchDestionation: searchDestionation
}

function insert(req, res, next) {

    var destinations = new Destinations({
        title: req.body.title,
        organizer: req.body.organizer,
        gallery: req.body.gallery,
        rating: req.body.rating,
        price: req.body.price
    })
    destinations.details.push({
        location: req.body.location,
        description: req.body.description,
        start: req.body.start,
        end: req.body.end,
        include: req.body.include,
        exclude: req.body.exclude,
        activities: req.body.activities
    })
    destinations.save((err) => {
        if (err)
            throw err
        res.json(destinations)
        console.log(destinations);
    })

}

function displays(req, res) {
    Destinations.find({}, (err, destinations) => {
        res.json(destinations)
    })
}

function displayOne(req, res) {
    Destinations.findOne({
        _id: req.params.id
    }, (err, destinations) => {
        //update the book
        res.json(destinations)
    })
}

function update(req, res) {

    //finding a current book
    Destinations.findOne({
        _id: req.params.id
    }, (err, destinations) => {
        //update the book
        destinations.title = req.body.title,
            destinations.organizer = req.body.organizer,
            destinations.gallery = req.body.gallery,
            destinations.rating = req.body.rating,
            destinations.price = req.body.price,
            destinations.details[0].location = req.body.location,
            destinations.details[0].description = req.body.description,
            destinations.details[0].start = req.body.start,
            destinations.details[0].end = req.body.end,
            destinations.details[0].include = req.body.include,
            destinations.details[0].exclude = req.body.exclude,
            destinations.details[0].activities = req.body.activities
        destinations.save((err) => {
            if (err)
                throw err;
            res.json(destinations)
        })
    })
}

function deleteitem(req, res) {
    Destinations.remove({
        _id: req.params.id
    }, (err, destinations) => {
        res.json({
            "messages": "File deleted"
        })
    })
}


function displayOne(req, res) {
    Destinations.findOne({
        _id: req.params.id
    }, (err, destinations) => {
        //update the book
        res.json(destinations)
    })
}

function searchDestionation(req, res) {
    //  console.log(req.params.query);

    Destinations.find({
        $or: [{
            location: {
                $regex: req.params.query + '*',
                $options: 'i'
            }
        }, {
            title: {
                $regex: req.params.query + '*',
                $options: 'i'
            }
        }]
    }, (err, destinations) => {

        if (err)
            throw err;
        res.json(destinations)
    })
}
