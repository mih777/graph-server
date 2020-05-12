const Category = require('../../models/mytodos/MyTodoCategoryModel')

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

module.exports.getAllCategories = async (req, res) => {


    await Category.find({}, (err, categories) => {   
        if(err){
            res.send(err)
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(categories)

    }).sort({ _id: -1 })

}


module.exports.getOneById = async(req,res) => {
    const id = req.params.id
    await Category.findOne({_id: id}, function(err, category){
        
        
        if(err) return console.log(err);
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(category)
    });
}

// module.exports.deleteTodo = async (req, res) => {
//     await Category.deleteOne({ _id: req.params.id }, (err, todo) => {
//         if(err){
//             res.send(err);
//         }
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
//         res.json({ message: 'Successfully deleted todo!'})
//     })
// }