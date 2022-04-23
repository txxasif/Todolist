const mongoose =require('mongoose');
const todoSchema = mongoose.Schema({
    text:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Todo',todoSchema);
//mongo
/*mongoose.connect('mongodb://localhost/todo',{
    userNewUrlParser: true,useUnifiedTopology: true
}).then(()=>{
        console.log('DB is con')
})
//Mong
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});
*/