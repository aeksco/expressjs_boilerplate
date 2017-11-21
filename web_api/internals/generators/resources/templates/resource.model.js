const mongoose = require('mongoose')
const Schema = mongoose.Schema

// // // //

const <%= resource_title %> = new Schema({
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

module.exports = mongoose.model('<%= resource_title %>', <%= resource_title %>)
