const Todo = require('../../models/mytodos/MyTodoModel')

module.exports.createTodo = async(req,res) => {
    
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
            //res.json(todo)
        })
        
    }

module.exports.getAllTodosNoParams = async (req, res) => {

    await Todo.find({}, (err, todos) => {   
        if(err){
            res.send(err)
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(todos)

    })

} 

module.exports.getTodoByCategoryNoParams = async(req, res) => {
    
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

module.exports.getAllTodos = async (req, res) => {

    const pagination = req.query.pagination ? parseInt(req.query.pagination) : 3
    const page = req.query.page ? parseInt(req.query.page) : 1

    await Todo.find({}, (err, todos) => {   
        if(err){
            res.send(err)
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(todos)

    })
    .sort({ _id: -1 })
    .skip((page - 1) * pagination)
    .limit(pagination)

}

module.exports.getTodoByCategory = async(req, res) => {

    const pagination = req.query.pagination ? parseInt(req.query.pagination) : 3
    const page = req.query.page ? parseInt(req.query.page) : 1
    
    try {
        await Todo.find({category: req.params.category}, (err, todo) => {   
            if(err){
                res.send(err)
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json(todo)

        })
        .sort({ _id: -1 })
        .skip((page - 1) * pagination)
        .limit(pagination)
        
    } catch(e) {
        res.send(e)
    }

}


module.exports.getOneTodoById = async(req,res) => {
    const id = req.params.id
    await Todo.findOne({_id: id}, function(err, todo){
        
        
        if(err) return console.log(err);
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(todo)
    });
}
                       


module.exports.deleteTodoByCategory = async(req, res) => {
    
    try {
        await Todo.deleteMany({category: req.params.category}, (err, todo) => {   
            if(err){
                res.send(err)
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json({ message: 'Successfully deleted todos!'})

        })
        
    } catch(e) {
        res.send(e)
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

module.exports.updateTodo = async(req, res) => {
    const updated = {
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        completed: req.body.completed
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
        completed: req.body.completed
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