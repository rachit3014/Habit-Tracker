const express =require('express');
const router=express.Router();

const habitController=require('../controllers/habit');
router.get('/',habitController.home);

router.get('/weekly',habitController.weekly);
router.post('/create',habitController.create);
router.get('/delete-task/:id',habitController.delete);
router.get('/status_up/',habitController.toggle_task);
module.exports=router;