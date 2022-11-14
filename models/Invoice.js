const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    paymentDue: {
        type: Date,
        required: [true, "must provide a date"]
    },
    description: {
        type: String, 
        required: [true, "must provide a description"]
    },
    paymentTerms: {
        type: Number,
        required: [true, "must provide a payment term length"]
    },
    clientName: {
        type: String,
        required: [true, "must provide clients name"]
    },
    clientEmail: {
        type: String,
        required: [true, "must provide clients email address"]
    },
    status: {
        type: String,
        required: [true, "must provide status"]
    },
    total: {
        type: Number,
        required: [true, "must provide total amount to pay"]
    },
    senderAddress: {
        street: {
            type: String,
            require: [true, "must provide street name"]
        },
        city: {
            type: String,
            require: [true, "must provide city name"]
        },
        postCode: {
            type: String,
            require: [true, "must provide post code"]
        },
        country: {
            type: String,
            require: [true, "must provide country name"]
        }
    },
    clientAddress: {
        street: {
            type: String,
            require: [true, "must provide street name"]
        },
        city: {
            type: String,
            require: [true, "must provide city name"]
        },
        postCode: {
            type: String,
            require: [true, "must provide post code"]
        },
        country: {
            type: String,
            require: [true, "must provide country name"]
        }
    },
    items: [
        {
            name: String,
            quantity: Number,
            price: Number,
            total: Number
        }
    ]
})

module.exports = mongoose.model('Invoice', InvoiceSchema)