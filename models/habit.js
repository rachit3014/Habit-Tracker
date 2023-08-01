//  importing mongoose
const mongoose=require('mongoose');
//  creating Schema
const habitSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    all_updates:[
        {
            status:String,
            date: String,
            day:String
        }
    ]
});

// model name
const Habit= mongoose.model('Habit',habitSchema);
module.exports=Habit;
