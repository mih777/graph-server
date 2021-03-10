const Customer = require('../../models/customers/Customer')


module.exports.createCustomer = async function(req, res) {
    const customer = new Customer({
      name: req.body.name,
      email: req.body.phone,
      phone: req.body.phone,
      
    })
  
    try {
      await customer.save()
      res.status(201).json({message: 'Customer created !',customer})
    } catch (e) {
      errorHandler(res, e)
    }
} 


module.exports.getAllCustomers = async (req, res) => {


    await Customer.find({}, (err, customers) => {   
        if(err){
            res.send(err)
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(customers)

    }).sort({ _id: -1 })

}

module.exports.deleteCustomer = async (req, res) => {
    await Customer.deleteOne({ _id: req.params.id }, (err, todo) => {
        if(err){
            res.send(err);
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
        res.json({ message: 'Successfully deleted customer!'})
    })
}