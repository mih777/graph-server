const Category = require('../../models/advanced-todolist/Category')


module.exports.createCategory = async(req,res) => {
    
    let category = new Category(req.body)
    
        await category.save((err, category) => {
            if(err) {
                res.send(err)
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json({
                message: 'category created !', category
            })
            //res.json(todo)
        })
        
}

module.exports.getCategories = async (req, res) => {


    await Category.find({}, (err, categories) => {   
        if(err){
            res.send(err)
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(categories)

    }).sort({ count: -1 })

}


// module.exports.getOneById = async(req,res) => {
//     const id = req.params.id
//     await Todo.findOne({_id: id}, function(err, todo){
        
        
//         if(err) return console.log(err);
        
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//         res.json(todo)
//     });
// }
                       

// module.exports.updateTodo = async(req, res) => {
//     const updated = {
//         count: req.body.count
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


module.exports.deleteCategory = async (req, res) => {
    await Category.deleteOne({ _id: req.params.id }, (err, todo) => {
        if(err){
            res.send(err);
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
        res.json({ message: 'Successfully deleted category!'})
    })
}