const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // //

const Widget = new Schema({
    label: String
},
    // Collection options
    {
        timestamps: {
            createdAt: 'createdOn',
            updatedAt: 'updatedOn'
        },
        versionKey: false
    }
);

// // // //

module.exports = mongoose.model('Widget', Widget)
