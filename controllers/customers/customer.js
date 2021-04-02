const Customer = require('../../models/customers/Customer')


module.exports.createCustomer = async function(req, res) {

    const candidate = await Customer.findOne({email: req.body.email})

    if (candidate) {
        // Пользователь существует, нужно отправить ошибку
        res.status(409).json({
        message: 'Такой email уже занят. Попробуйте другой.'
        })
    }else{
        const customer = new Customer({ ...req.body })
        
          try {
            await customer.save()
            res.status(201).json({message: 'Customer created77777777 !',customer})
          } catch (e) {
            errorHandler(res, e)
          }
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