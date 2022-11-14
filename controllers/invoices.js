const Invoice = require('../models/Invoice')

const getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.find({})
        res.status(200).json({invoices})
    } catch(error) {
        res.status(500).json({msg:error})
    }
}

const getInvoice = async (req, res) => {
    try {
        const {id:invoiceID} = req.params
        const invoice = await Invoice.findOne({_id:invoiceID})
        if(!invoice) {
            return  res.status(404).json({msg: `no invoice with the id ${invoiceID}`})
        }
        res.status(200).json({invoice})
    } catch(error) {
        res.status(500).json({msg:error})
    }
}

const createInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.create(req.body)
        res.status(201).json({invoice})
    } catch (error) {
        res.status(500).json({msg:error})
    }

}

const editInvoice = async (req, res) => {
    try {
        const {id: invoiceID} = req.params

        const invoice = await Invoice.findOneAndUpdate({_id:invoiceID}, req.body, {new:true,runValidators:true})
        
        if(!invoice) {
            return  res.status(404).json({msg: `no invoice with the id ${invoiceID}`})
        }

        res.status(200).json({invoice})
        
    } catch(error) {
        res.status(500).json({msg:error})
    }
}

const deleteInvoice = async (req, res) => {
    try {
        const {id:invoiceID} = req.params
        const invoice = await Invoice.findOneAndDelete({_id:invoiceID})

        if(!invoice) {
            return res.status(404).json({msg:`no invoice with id ${invoiceID} exist`})
        }
        res.status(200).json({invoice})

    } catch(error) {
        res.status(500).json({msg:error})
    }
}


module.exports = {
    getAllInvoices,
    getInvoice,
    createInvoice,
    editInvoice,
    deleteInvoice
}