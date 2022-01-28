
const mongoose = require('mongoose');
const Model = mongoose.model('Quote');
const custom = require('./helpersControllers/custom');

const crudController = require('./helpersControllers/crudController');
const methods = crudController.createCRUDController('Quote');

delete methods['create'];
delete methods['update'];

methods.create = async (req, res) => {
  try {
    const { items = [], taxRate = 0, discount = 0 } = req.body;

    // default
    let subTotal = 0;
    let taxTotal = 0;
    let total = 0;
    // let credit = 0;

    //Calculate the items array with subTotal, total, taxTotal
    items.map((item) => {
      let total = item['quantity'] * item['price'];
      //sub total
      subTotal += total;
      //item total
      item['total'] = total;
    });
    taxTotal = subTotal * taxRate;
    total = subTotal + taxTotal;

    let body = req.body;

    body['subTotal'] = subTotal;
    body['taxTotal'] = taxTotal;
    body['total'] = total;
    body['items'] = items;

    // Creating a new document in the collection
    const result = await new Model(body).save();
    const fileId = 'invoice-' + result._id + '.pdf';
    const updateResult = await Model.findOneAndUpdate(
      { _id: result._id },
      { pdfPath: fileId },
      {
        new: true,
      }
    ).exec();
    // Returning successfull response

    custom.generatePdf('Quote', { filename: 'quote', format: 'A4' }, result);

    // Returning successfull response
    return res.status(200).json({
      success: true,
      result: updateResult,
      message: 'Successfully Created',
    });
  } catch (err) {
    // If err is thrown by Mongoose due to required validations
    if (err.name == 'ValidationError') {
      return res.status(400).json({
        success: false,
        result: null,
        message: 'Required fields are not supplied',
      });
    } else {
      // Server Error
      return res.status(500).json({
        success: false,
        result: null,
        message: 'Oops there is an Error',
      });
    }
  }
};

methods.update = async (req, res) => {
  try {
    const { items = [], taxRate = 0, discount = 0 } = req.body;

    // default
    let subTotal = 0;
    let taxTotal = 0;
    let total = 0;
    // let credit = 0;

    //Calculate the items array with subTotal, total, taxTotal
    items.map((item) => {
      let total = item['quantity'] * item['price'];
      //sub total
      subTotal += total;
      //item total
      item['total'] = total;
    });
    taxTotal = subTotal * taxRate;
    total = subTotal + taxTotal;

    let body = req.body;

    body['subTotal'] = subTotal;
    body['taxTotal'] = taxTotal;
    body['total'] = total;
    body['items'] = items;
    body['pdfPath'] = 'quote-' + req.params.id + '.pdf';
    // Find document by id and updates with the required fields

    const result = await Model.findOneAndUpdate({ _id: req.params.id, removed: false }, body, {
      new: true, // return the new result instead of the old one
    }).exec();

    // Returning successfull response

    custom.generatePdf('Quote', { filename: 'invoice', format: 'A4' }, result);
    return res.status(200).json({
      success: true,
      result,
      message: 'Updated Successfully',
    });
  } catch (err) {
    // If err is thrown by Mongoose due to required validations
    console.log(err);
    if (err.name == 'ValidationError') {
      return res.status(400).json({
        success: false,
        result: null,
        message: 'Required fields are not supplied',
      });
    } else {
      // Server Error
      return res.status(500).json({
        success: false,
        result: null,
        message: 'Oops there is an Error',
      });
    }
  }
};

module.exports = methods;
