const Calc = require('../../models/debtModel/calcModel')

module.exports.create = async(req,res) => {
    
    let debt = new Calc(req.body)
    
        await debt.save((err, debt) => {
            if(err) {
                res.send(err)
            }
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.json({
                message: 'money-count created !', debt
            })
            //res.json(todo)
        })
        
}

module.exports.getAllDays = async(req,res) => {
    await Calc.find( function(err, debt){
        
        
        if(err) return console.log(err);
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.json(debt)
    });
}

// module.exports.getOneById = async(req,res) => {
//     const id = req.params.id
//     await Calc.findOne({_id: id}, function(err, debt){
        
        
//         if(err) return console.log(err);
        
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
//         res.json(debt)
//     });
// }

module.exports.update = async (req, res) => {
    const updated = {
        hours: req.body.hours,
        minutes: req.body.minutes,
        overtime: req.body.overtime
    }

    try {
    const count = await Calc.findOneAndUpdate(
        {_id: req.params.id},
        {$set: updated},
        {new: true}
    )
        res.status(200).json(count)
    } catch (e) {
        console.log(res, e)
    }
}
