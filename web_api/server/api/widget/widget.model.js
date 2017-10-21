const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // //

const Widget = new Schema({
    label: String
},
    // Collection options
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        },
        versionKey: false
    }
);

// // // //

module.exports = mongoose.model('Widget', Widget)
