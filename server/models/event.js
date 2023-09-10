var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    name: { type: String, required: true, max: 1000 },
    venue: { type: String, required: true, max: 1000 },
    date: { type: Date, required: true },
    time: { type: String, required: true, max: 7 },
    ticketQuantity: { type: Number, required: true, max: 99999999 },
    additionalNotes: { type: String, required: false, max: 1000 },
    isCancelled: { type: Boolean, required: false, default: false },
    image: { type: String, required: true, max: 1000 },
});

module.exports = mongoose.model("Event", EventSchema);