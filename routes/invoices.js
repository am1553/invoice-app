const express = require('express')
const router = express.Router()
const {getAllInvoices, getInvoice, createInvoice, editInvoice, deleteInvoice} = require('../controllers/invoices')


router.route('/').get(getAllInvoices).post(createInvoice)
router.route('/:id').get(getInvoice).patch(editInvoice).delete(deleteInvoice)

module.exports = router