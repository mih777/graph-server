const Product = require('../../models/onlineshop/Product')

module.exports.create = async(req,res) => {
    
    let product = new Product(req.body)
    
        await product.save((err, product) => {
            if(err) {
                res.send(err)
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json({ message: 'product created !', product })
        })
        
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

module.exports.updateProduct = async(req, res) => {
    const updated = {
        category: req.body.category,
        title: req.body.title,
        photo: req.body.photo,
        info: req.body.info,
        price: req.body.price
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

// module.exports.updateCompleted = async(req, res) => {
//     const updated = {
//         completed: req.body.completed,
//         //expired: req.body.expired
//     }

//     try {
//     const todo = await Todo.findOneAndUpdate(
//         {_id: req.params.id},
//         {$set: updated},
//         {new: true}
//     )
//         res.status(200).json(todo)
//     } catch (e) {
//         console.log(res, e)
//     }
// }

// module.exports.updateExpire = async(req, res) => {
//     const updated = {
//         expired: req.body.expired
//     }

//     try {
//     const todo = await Todo.findOneAndUpdate(
//         {_id: req.params.id},
//         {$set: updated},
//         {new: true}
//     )
//         res.status(200).json(todo)
//     } catch (e) {
//         console.log(res, e)
//     }
// }

// module.exports.deleteTodo = async (req, res) => {
//     await Todo.deleteOne({ _id: req.params.id }, (err, todo) => {
//         if(err){
//             res.send(err);
//         }
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
//         res.json({ message: 'Successfully deleted todo!'})
//     })
// }