const productSchema = require('./joiSchema');

module.exports.validateData = async (req , res , next)=>{
    const {name, image, price, description} = req.body;
    const { error, value } = await productSchema.validate({name, image, price, description});

    if(error){
        const message = error.message
    //    console.log(error)
    }

    next();
}

