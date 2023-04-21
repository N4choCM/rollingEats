const {Schema, model} = require('mongoose');

const MenuSchema = Schema({
    name:{
        type:String,
        required:[true, "El nombre es obligatorio."]
    },
    description:{
        type:String,
        required:[true, "La descripción es obligatoria."],
    },
    category:{
        type:String,
        required:[true, "La categoría es obligatoria."]
    },
    price:{
        type:Number,
        required:[true, "El precio es obligatorio."]
    },
    img: {
        type: String,
        required:[true, "La imagen es obligatoria."]
      },
    status:{
        type:Boolean,
        default:true
    }
})

MenuSchema.methods.toJSON=function(){
    const {__v, _id, ...menu} = this.toObject()
    menu.id = _id
    return menu;
}

module.exports=model("Menu", MenuSchema);