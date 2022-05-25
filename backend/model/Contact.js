const mongoose = require('mongoose')

//creation of the schemma 

const ContactSchema = mongoose.Schema({
    //tkteb schema chfih
    name:String,
    age:Number,
    email: {
        type:String ,
        required : true ,
        unique : true 

    }
})

module.exports = mongoose.model('Contacte',ContactSchema)
//ki t7otha sing ysn3ha howa en plusieurs donc ytzed kleha el s 
//dnas ce cas hedha twli tzidha kilma wela 7aja tna9es 3lik 