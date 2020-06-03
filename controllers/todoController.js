const Todo = require('../models/Todos')

module.exports.create = async(req,res) => {
    
    let todo = new Todo(req.body)
    
        await todo.save((err, todo) => {
            if(err) {
                res.send(err)
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json({
                message: 'todo created !', todo
            })
            
        })
        
    }

module.exports.getAllTodosNoParams = async (req, res) => {

    await Todo.find({}, (err, todos) => {   
        if(err){
            res.send(err)
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.status(200).json(todos)
    
    })
        .sort({ _id: -1 })

}    

module.exports.getAllTodos = async (req, res) => {

    const pagination = req.query.pagination ? parseInt(req.query.pagination) : 3
    const page = req.query.page ? parseInt(req.query.page) : 1

    await Todo.find({}, (err, todos) => {   
        if(err){
            res.send(err)
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.status(200).json(todos)
    
    })
        .sort({ _id: -1 })
        .skip((page - 1) * pagination)
        .limit(pagination)

}


module.exports.getOneById = async(req,res) => {
    const id = req.params.id
    await Todo.findOne({_id: id}, function(err, todo){
        
        
        if(err) return console.log(err);
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(todo)
    });
}
                       
module.exports.getByCategory = async(req, res) => {
    
    try {
        await Todo.find({category: req.params.category}, (err, todo) => {   
            if(err){
                res.send(err)
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json(todo)

        })
        
    } catch(e) {
        res.send(e)
    }

}

module.exports.updateTodo = async(req, res) => {
    const updated = {
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        completed: req.body.completed,
        expired: req.body.expired
    }

    try {
    const todo = await Todo.findOneAndUpdate(
        {_id: req.params.id},
        {$set: updated},
        {new: true}
    )
        res.status(200).json(todo)
    } catch (e) {
        console.log(res, e)
    }
}

module.exports.updateCompleted = async(req, res) => {
    const updated = {
        completed: req.body.completed,
        //expired: req.body.expired
    }

    try {
    const todo = await Todo.findOneAndUpdate(
        {_id: req.params.id},
        {$set: updated},
        {new: true}
    )
        res.status(200).json(todo)
    } catch (e) {
        console.log(res, e)
    }
}

module.exports.updateExpire = async(req, res) => {
    const updated = {
        expired: req.body.expired
    }

    try {
    const todo = await Todo.findOneAndUpdate(
        {_id: req.params.id},
        {$set: updated},
        {new: true}
    )
        res.status(200).json(todo)
    } catch (e) {
        console.log(res, e)
    }
}

module.exports.deleteTodo = async (req, res) => {
    await Todo.deleteOne({ _id: req.params.id }, (err, todo) => {
        if(err){
            res.send(err);
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
        res.json({ message: 'Successfully deleted todo!'})
    })
}