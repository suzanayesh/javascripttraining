const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employee = new Schema(
    {
        id: {type: Number,required:true},
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        role: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('employees', Employee)
