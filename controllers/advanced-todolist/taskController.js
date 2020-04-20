const Task = require('../../models/advanced-todolist/Task')


module.exports.createTask = async(req,res) => {
    
    let task = new Task(req.body)
    
        await task.save((err, todo) => {
            if(err) {
                res.send(err)
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json({
                message: 'task created !', task
            })
            //res.json(todo)
        })
        
}

module.exports.getAllTasks = async (req, res) => {


    await Task.find({}, (err, tasks) => {   
        if(err){
            res.send(err)
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(tasks)

    }).sort({ count: -1 })

}

module.exports.getTasksByCategory = async(req, res) => {
    
    try {
        await Task.find({category: req.params.category}, (err, tasks) => {   
            if(err){
                res.send(err)
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json(tasks)

        })
        
    } catch(e) {
        res.send(e)
    }

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


module.exports.deleteTask = async (req, res) => {
    await Task.deleteOne({ _id: req.params.id }, (err, todo) => {
        if(err){
            res.send(err);
        }
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept')
        res.json({ message: 'Successfully deleted task!'})
    })
}