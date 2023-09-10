var Event = require("../models/event");

exports.event_create = function (req, res, next) {
    var event = new Event(
        {
            name: req.body.name,
            venue: req.body.venue,
            date: req.body.date,
            time: req.body.time,
            ticketQuantity: req.body.ticketQuantity,
            additionalNotes: req.body.additionalNotes,
            image: req.body.image,
            isCancelled: false
        }
    );

    event.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(event)
    })
};

exports.event_list = function (req, res, next) {
    Event.find({}, function (err, events) {
        if (err) return next(err);
        res.send(events);
    })
};

exports.event_details = function (req, res, next) {
    Event.findById(req.params.id, function (err, event) {
        if (err) return next(err);
        res.send(event);
    })
};

exports.event_update = function (req, res, next) {
    Event.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, event) {
        if (err) return next(err);
        res.send(event);
    });
};