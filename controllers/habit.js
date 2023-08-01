// importing Habit model
const Habit=require('../models/habit');


// to craete task 
module.exports.create= async function(req,res)
{
    try {
       let days=["Sun", "Mon", "Tue","Wed","Thu","Fri","Sat"] // days array 
        let all_updates=[]; //all updates empty array
        // for getting 7 day from javascript
        for( let m=0;m<=6;m++)
        {
           let date = new Date(); // current date
          
         
           date.setDate(date.getDate() - m);

           // getting date
           let DAte=date.getDate();
           //getting day 
           let day=date.getDay();
           day=days[day]
        

           all_updates.push({status:'NONE',date:DAte,day:day})    
        } 
        req.body.all_updates=all_updates;
        let task= await Habit.create(req.body);
        // console.log(task)

        return res.redirect('back');       
    } catch (error) {
        console.log(error);
        return res.redirect('back');      
    };
}


// to toogle the task
module.exports.toggle_task= async function(req,res)

{
    try {
        console.log(req.query);
        let task=await Habit.findById(req.query.task_id);
      
        console.log(task.all_updates);
      
        for( let y of task.all_updates)
        {
            if ( y.id==req.query.day)
            {
                if (y.status =='NONE')
                    {
                        y.status='DONE';
                        task.save();
                    }
                    else if (y.status =='DONE')
                    {
                        y.status='NOTDONE';
                        task.save();
                    }
                    else if (y.status =='NOTDONE')
                    {
                        y.status='NONE';
                        task.save();
                    }
    
            }
            
    
        }
       
        return res.redirect('back');
        
    } catch (error) {
        console.log(error);
        return res.redirect('back');
        
    }
   
}
// to delete task

module.exports.delete= async function(req,res){
    try {
        // getting id from params
        let id= req.params.id;
        // finding  habit to delete
        let delete_id=await Habit.findByIdAndDelete(id);
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        return res.redirect('back');
        
    }

}
// to render daily task
module.exports.home= async function(req,res){
    let habits= await Habit.find({});
    return res.render('daily',{
        title:'Daily',
        habit_task:habits
    })


}
// to render weekly task
module.exports.weekly = async function(req,res){
    let habit = await Habit.find({});

    return res.render('weekly',{
        title:'Weekly',
        habit_task:habit
    })
}