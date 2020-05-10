const Category = require('../../models/mytodolist/TodoCategoryModel')

module.exports.create = async(req,res) => {
    
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