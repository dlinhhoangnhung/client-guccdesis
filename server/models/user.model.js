const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    
    orderslist: [
        { type: String }],
    orderid: [{
        type: Schema.Types.ObjectId, ref: 'Order'
    }],
    resetToken: String,
    expireToken: Date,
    resetLink: { data: String, default: '' },
    role: { type: String, default: "user", enum: ["admin", "user"] },


    address: { type: String },
    phone: { type: String },
    avatar: { type: String },

},
    {
        timestamps: true
    })

module.exports = mongoose.model('User', userSchema)



