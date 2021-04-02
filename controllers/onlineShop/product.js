const Product = require('../../models/onlineshop/Product')
const errorHandler = require('../../utils/errorHandler')


module.exports.create = async function(req, res) {
    const product = new Product({
      title: req.body.title,
      category: req.body.category,
      info: req.body.info,
      description: req.body.description,
      price: req.body.price,
      imageSrc: req.file ? req.file.path : ''
    })
  
    try {
      await product.save()
      res.status(201).json({message: 'Product created !',product})
    } catch (e) {
      errorHandler(res, e)
    }
}

module.exports.updateProduct = async(req, res) => {
    const updated = {
        category: req.body.category,
        title: req.body.title,
        photo: req.body.photo,
        info: req.body.info,
        description: req.body.description,
        price: req.body.price,
        imageSrc: req.file ? req.file.path : ''
    }

    try {
    const product = await Product.findOneAndUpdate(
        {_id: req.params.id},
        {$set: updated},
        {new: true}
    )
        res.status(200).json(product)
    } catch (e) {
        console.log(res, e)
    }
}  


module.exports.getAllProducts = async (req, res) => {


    await Product.find({}, (err, products) => {   
        if(err){
            res.send(err)
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(products)

    }).sort({ _id: -1 })

}


module.exports.getOneById = async(req,res) => {
    const id = req.params.id
    await Product.findOne({_id: id}, function(err, product){
        
        
        if(err) return console.log(err);
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(product)
    });
}
                       
module.exports.getByCategory = async(req, res) => {
    
    try {
        await Product.find({category: req.params.category}, (err, products) => {   
            if(err){
                res.send(err)
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json(products)

        })
        
    } catch(e) {
        res.send(e)
    }

}


module.exports.deleteProduct = async (req, res) => {
    await Product.deleteOne({ _id: req.params.id }, (err, product) => {
        if(err){
            res.send(err);
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
        res.json({ message: 'Successfully deleted product!'})
    })
}